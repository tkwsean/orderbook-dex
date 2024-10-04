export async function hasToken(contract, tokenSymbol) {
    try {
      const response = await contract.methods.hasToken(tokenSymbol).call();
      return {
        hasToken: response
      };
    } catch (error) {
      console.error(error);
      return {
        msg: "Error determining if token exists"
      };
    }
  }