import { getSellOrderBook } from '../OrderBookManagement/getSellOrderBook'; // Import the getBuyOrderBook function if defined elsewhere

export async function sellToken(symbolName, priceInWei, amount, addr) {
  try {
    await contract.methods.sellToken(symbolName, priceInWei, amount)
                          .send({ from: addr, gas: 1000000 });

    const response = await getSellOrderBook(symbolName);
    return response;
  } catch (error) {
    console.error(error);
    return {
      msg: "Error selling token"
    };
  }
}
