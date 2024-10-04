async function getSellOrderBook(contract, symbolName) {
    var sellOrderBook = await contract.methods.getSellOrderBook(symbolName).call();
    return {
      indexes: sellOrderBook['0'],
      prices: sellOrderBook['1'],
      amounts: sellOrderBook['2']
    }
  }

module.exports = getSellOrderBook;