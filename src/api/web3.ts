import Web3 from "web3";

// https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md
export async function unlockAccounts() {
  // @ts-ignore
  const { ethereum } = window;

  if (!ethereum) {
    throw new Error("Web3 not found");
  }

  const web3 = new Web3(ethereum);
  await ethereum.enable();

  const accounts = await web3.eth.getAccounts();

  return { web3, accounts };
}

export function subscribeToAccount(
  web3: Web3,
  callback: (error: Error | undefined, account: string) => any
) {
  const id = setInterval(async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      callback(undefined, accounts[0] || "");
    } catch (error) {
      callback(error, "");
    }
  });

  return () => {
    clearInterval(id);
  };
}
