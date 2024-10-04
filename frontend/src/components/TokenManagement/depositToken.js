async function depositToken(contract, symbolName, amount, addr) {
    try {
      // Interact with the contract to deposit the token
      await contract.methods.depositToken(symbolName, amount).send({ from: addr, gas: 1000000 });
  
      // Retrieve the updated token balance
      var balanceForToken = await contract.methods.getBalanceForToken(symbolName).call({ from: addr });
  
      // Return the balance for the token
      return { balanceForToken };
    } catch (error) {
      console.error('Error depositing token:', error);
      throw new Error('Error depositing token');
    }
  }
  
module.exports = depositToken;
  