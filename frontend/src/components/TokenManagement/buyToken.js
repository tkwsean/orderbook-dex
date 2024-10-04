import { getBuyOrderBook } from '../OrderBookManagement/getBuyOrderBook'; // Import the getBuyOrderBook function if defined elsewhere

export async function buyToken(contract, symbolName, priceInWei, amount, addr) {
  try {
    await contract.methods.buyToken(symbolName, priceInWei, amount)
                          .send({ from: addr, gas: 1000000 });

    const response = await getBuyOrderBook(symbolName);
    return response;
  } catch (error) {
    console.error(error);
    return {
      msg: "Error buying token"
    };
  }
}