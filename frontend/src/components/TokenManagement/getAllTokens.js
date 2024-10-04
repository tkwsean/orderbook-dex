export async function getAllTokens(contract) {
  try {
    const response = await contract.methods.getAllTokens().call();
    const tokens = [];
    for (let i = 0; i < response['0'].length; i++) {
      tokens.push({
        symbolName: response['0'][i],
        address: response['1'][i]
      });
    }

    return {
      tokens: tokens
    };
  } catch (error) {
    console.error(error);
    return {
      msg: "Error getting all tokens"
    };
  }
}

// export async function getAllTokens(contract) {
//   try {
//     console.log('Hello World!');
//     const response = await contract.methods.getAllTokens().call();
//     console.log('Hello World!');
//     console.log("Response from contract:", response);
//     return response;
//   } catch (error) {
//     console.error("Error calling getAllTokens:", error);
//     throw error;
//   }
// }
