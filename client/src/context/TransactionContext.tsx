import { createContext } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext({
  value: "",
});

const { ethereum } = window;

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
  return (
    <TransactionContext.Provider value={{ value: "text" }}>
      {children}
    </TransactionContext.Provider>
  );
};
