import { ethers } from "ethers";
import ERC20 from "./ERC20.js";

//Node Provider Addres
const nodeProvider = 'https://mainnet.infura.io/v3/a1d29c0dd17c4e35927563f16f82302d';
const customHttpProvider = new ethers.providers.JsonRpcProvider(nodeProvider);

//ERC-20 contract address
const contractAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

const contract = new ethers.Contract(contractAddress, ERC20.abi, customHttpProvider);

contract.on("Transfer", (from, to, value, event) => {
  console.log({
    from: from,
    to: to,
    value: value.toString(),
    data: event
  });
});
