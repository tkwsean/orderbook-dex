async function withdrawEther(contract, amountInWei, addr) {
    try {
      // Interact with the contract to withdraw Ether
      var etherBalanceInWei = await contract.methods.withdrawEther(amountInWei).send({ from: addr });
  
      // Return the result
      return etherBalanceInWei;
    } catch (error) {
      console.error('Error withdrawing Ether:', error);
      throw new Error('Ether withdrawal failed');
    }
  }
  
  module.exports = withdrawEther;
  