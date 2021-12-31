import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext({
  connectWallet: () => {},
});

const { ethereum } = window as any;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({ provider, signer, transactionContract });
};

interface TransactionProviderProps {
  children: React.ReactNode;
}

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        // getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};
