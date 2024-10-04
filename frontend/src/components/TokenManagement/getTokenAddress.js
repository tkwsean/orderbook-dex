async function getTokenAddress(contract, symbolName) {
    try {
      // Interact with the contract to get the token address
      var tokenAddress = await contract.methods.getTokenAddress(symbolName).call();
  
      // Return the token address
      return { tokenAddress };
    } catch (error) {
      console.error('Error retrieving token address:', error);
      throw new Error('Error retrieving token address');
    }
  }
  
module.exports = getTokenAddress;
  