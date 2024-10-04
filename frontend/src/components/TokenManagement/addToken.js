async function addToken(contract, symbolName, ecr20TokenAddress, addr) {
    try {
      // Interact with the contract to add a token
      await contract.methods.addToken(symbolName, ecr20TokenAddress).send({ from: addr });
  
      // Return a success message
      return { success: true };
    } catch (error) {
      console.error('Error adding token:', error);
      throw new Error('Error adding token');
    }
  }
  
module.exports = addToken;
  