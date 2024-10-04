import React, {useState, useEffect} from 'react';
import Web3 from 'web3';


import { getEtherBalanceInWei } from './components/EtherManagement/getEtherBalanceInWei';
import { withdrawEther } from './components/EtherManagement/withdrawEther';
import { cancelBuyOrder } from './components/OrderBookManagement/cancelBuyOrder';
import { cancelSellOrder }  from './components/OrderBookManagement/cancelSellOrder';
import { getAccountBuyOrders } from './components/OrderBookManagement/getAccountBuyOrders';
import { getAccountSellOrders } from './components/OrderBookManagement/getAccountSellOrders';
import { getBuyOrderbook } from './components/OrderBookManagement/getBuyOrderBook';
import { getSellOrderbook } from './components/OrderBookManagement/getSellOrderBook';
import { addToken } from './components/TokenManagement/addToken';
import { buyToken } from './components/TokenManagement/buyToken';
import { depositToken } from './components/TokenManagement/depositToken';
import { getAllTokens } from './components/TokenManagement/getAllTokens';
import { getBalanceForToken } from './components/TokenManagement/getBalanceForToken';
import { getTokenAddress } from './components/TokenManagement/getTokenAddress';
import { hasToken } from './components/TokenManagement/hasToken';
import { sellToken } from './components/TokenManagement/sellToken';
import { withdrawToken } from './components/TokenManagement/withdrawToken';


import exchange_artifact from './contracts/Exchange.json';


var exchange_contract_address = process.env.REACT_APP_EXCHANGE_ADDRESS;
var localProviderURL = process.env.REACT_APP_GANACHE_GUI_ADDRESS;

let web3 = new Web3(new Web3.providers.HttpProvider(localProviderURL));
const contract = new web3.eth.Contract(exchange_artifact.abi, exchange_contract_address);
console.log('Connected to the local blockchain with contract at:', exchange_contract_address);

function Exchange() {
  const [tokens, setTokens] = useState([]); // State to store the tokens
  const [loading, setLoading] = useState(true); // State to manage loading status

  // useEffect to fetch tokens when the component mounts
  useEffect(() => {
    async function fetchTokens() {
      try {
        const tokenList = await getAllTokens(); // Call the getAllTokens function
        setTokens(tokenList.tokens || []); // Update the state with the fetched tokens
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching tokens:', error);
        setLoading(false); // In case of error, stop loading
      }
    }

    fetchTokens(); // Trigger the fetch when the component mounts
  }, []); // The empty dependency array means this useEffect runs once, when the component mounts

  return (
    <div>
      <h1>Exchange Page</h1>
      {loading ? (
        <p>Loading tokens...</p>
      ) : tokens.length > 0 ? (
        <div>
          <h3>Available Tokens:</h3>
          <ul>
            {tokens.map((token, index) => (
              <li key={index}>
                {token.symbolName} - {token.address}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No tokens available</p> // Handle case where no tokens are found
      )}
    </div>
  );
}

export default Exchange;
