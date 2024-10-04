export async function getBalanceForToken(symbolName, addr) {
    try {
      const balanceForToken = await contract.methods.getBalanceForToken(symbolName).call({ from: addr });
      return {
        balanceForToken: balanceForToken
      };
    } catch (error) {
      console.error(error);
      return { 
        msg: "Error retrieving token balance"
      };
    }
  }