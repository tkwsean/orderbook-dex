// tokenService.js
import { getSellOrderBook } from '../OrderBookManagement/getSellOrderBook'; // Import the getSellOrderBook function if defined elsewhere

export async function cancelSellOrder(contract, symbolName, orderIndex, addr) {
  try {
    await contract.methods.cancelSellOrder(symbolName, orderIndex)
                          .send({ from: addr, gas: 1000000 });

    const response = await getSellOrderBook(symbolName);
    return response;
  } catch (error) {
    console.error(error);
    return {
      msg: "Error cancelling sell order"
    };
  }
}
