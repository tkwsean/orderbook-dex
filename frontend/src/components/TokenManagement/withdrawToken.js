async function withdrawToken(symbolName, amount, addr) {
    try {
      // Interact with the contract to withdraw the token
      await contract.methods.withdrawToken(symbolName, amount).send({ from: addr, gas: 1000000 });
  
      // Retrieve the updated token balance
      var balanceForToken = await contract.methods.getBalanceForToken(symbolName).call({ from: addr });
  
      // Return the balance for the token
      return { balanceForToken };
    } catch (error) {
      console.error('Error withdrawing token:', error);
      throw new Error('Error withdrawing token');
    }
  }
  
  module.exports = withdrawToken;
  