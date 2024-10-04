export async function getAccountSellOrders(contract, symbolName, addr) {
    var sellOrderBook = await contract.methods.getAccountSellOrders(symbolName).call({ from: addr });
    return {
      indexes: sellOrderBook['0'],
      prices: sellOrderBook['1'],
      amounts: sellOrderBook['2']
    }
  }