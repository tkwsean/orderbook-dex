async function getAccountBuyOrders(symbolName, addr) {
    var buyOrderBook = await contract.methods.getAccountBuyOrders(symbolName).call({ from: addr });
    return {
      indexes: buyOrderBook['0'],
      prices: buyOrderBook['1'],
      amounts: buyOrderBook['2']
    }
  }

module.exports = getAccountBuyOrders;