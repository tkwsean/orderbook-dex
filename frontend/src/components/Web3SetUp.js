import exchange_artifact from '../contracts/Exchange.json';
import Web3 from 'web3';


const exchange_contract_address = process.env.REACT_APP_EXCHANGE_ADDRESS;
const localProviderURL = process.env.REACT_APP_GANACHE_GUI_ADDRESS;



  export const loadContract = async () => {
    const web3 = new Web3(Web3.givenProvider || localProviderURL);
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = exchange_artifact.networks[networkId];
    const exchangeContract = new web3.eth.Contract(
      exchange_artifact.abi,
      exchange_contract_address
    );
  
    return { web3, exchangeContract };
  };