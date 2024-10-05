import React, {useState, useEffect, useRef} from 'react';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import { FormControl, InputLabel, Select, MenuItem, CircularProgress, Typography } from '@mui/material';


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
import { loadContract } from './components/Web3SetUp';


const { web3, exchangeContract } = await loadContract();

function Exchange() {
  const [tokens, setTokens] = useState([]); // State to store the tokens
  const [selectedToken, setSelectedToken] = useState(''); // State for the selected token
  // useEffect to fetch tokens when the component mounts
  useEffect(() => {
    async function fetchTokens() {
      try {
        const tokenList = await getAllTokens(exchangeContract); // Call the getAllTokens function
        setTokens(tokenList.tokens); // Update the state with the fetched tokens
      } catch (error) {
        console.error('Error fetching tokens:', error);
      }
    }

    fetchTokens(); // Trigger the fetch when the component mounts
  }, []); // The empty dependency array means this useEffect runs once, when the component mounts

  const handleChange = (event) => {
    setSelectedToken(event.target.value);
  };

  return (
    <div>
      <h1>Exchange Page</h1>
      <FormControl fullWidth variant="outlined" style={{ marginTop: '20px' }}>
        <InputLabel id="select-token-label">Select Token</InputLabel>
        <Select labelId="select-token-label" id="select-token" value={selectedToken} onChange={handleChange} label="Select Token">
        {tokens.map((token) => (
              <MenuItem key={token.address} value={token.symbolName}>
                {token.symbolName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Exchange;
