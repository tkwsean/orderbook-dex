
import { getBuyOrderBook } from '../OrderBookManagement/getBuyOrderBook';

export async function cancelBuyOrder(contract, symbolName, orderIndex, addr) {
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
