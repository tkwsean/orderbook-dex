async function getBuyOrderBook(symbolName) {
    var buyOrderBook = await contract.methods.getBuyOrderBook(symbolName).call();
    return {
      indexes: buyOrderBook['0'],
      prices: buyOrderBook['1'],
      amounts: buyOrderBook['2']
    }
  }

module.exports = getBuyOrderBook;