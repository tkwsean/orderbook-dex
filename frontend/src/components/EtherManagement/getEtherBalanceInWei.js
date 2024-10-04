export async function getEtherBalanceInWei(contract,addr) {
  try {
    // Interact with the contract to get the Ether balance
    var etherBalanceInWei = await contract.methods.getEtherBalanceInWei().call({ from: addr });

    // Return the balance
    return etherBalanceInWei;
  } catch (error) {
    console.error('Error retrieving Ether balance:', error);
    throw new Error('Error retrieving Ether balance');
  }
}
