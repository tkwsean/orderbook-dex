// tokenService.js

import { contract } from './contractInstance'; // Ensure the path points to your contract instance definition
import { getBuyOrderBook } from '../OrderBookManagement/getBuyOrderBook';

export async function cancelBuyOrder(symbolName, orderIndex, addr) {
  try {
    await contract.methods.cancelBuyOrder(symbolName, orderIndex)
                          .send({ from: addr, gas: 1000000 });

    const response = await getBuyOrderBook(symbolName);
    return response;
  } catch (error) {
    console.error(error);
    return {
      msg: "Error cancelling buy order"
    };
  }
}
