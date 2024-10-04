import React from 'react';
import Web3 from 'web3';
import getEtherBalanceInWei from './components/EtherManagement/getEtherBalanceInWei';
import withdrawEther from './components/EtherManagement/withdrawEther';
import cancelBuyOrder from './components/OrderBookManagement/cancelBuyOrder';
import cancelSellOrder from './components/OrderBookManagement/cancelSellOrder';
import getAccountBuyOrders from './components/OrderBookManagement/getAccountBuyOrders';
import getAccountSellOrders from './components/OrderBookManagement/getAccountSellOrders';
import getBuyOrderbook from './components/OrderBookManagement/getBuyOrderBook';
import getSellOrderbook from './components/OrderBookManagement/getSellOrderBook';
import addToken from './components/TokenManagement/addToken';
import buyToken from './components/TokenManagement/buyToken';
import depositToken from './components/TokenManagement/depositToken';
import getAllTokens from './components/TokenManagement/getAllTokens';
import getBalanceForToken from './components/TokenManagement/getBalanceForToken';
import getTokenAddress from './components/TokenManagement/getTokenAddress';
import hasToken from './components/TokenManagement/hasToken';
import sellToken from './components/TokenManagement/sellToken';
import withdrawToken from './components/TokenManagement/withdrawToken';

function Exchange() {
  return (
    <div>
      <h1>Exchange Page</h1>
      <p>This is the exchange page.</p>
    </div>
  );
}

export default Exchange;
