import { ethers } from "ethers";
import ERC20 from "./ERC20.js";
import ERC721 from "./ERC721.js";

import 'dotenv/config'

//Node Provider Addres
const nodeProvider = 'https://eth-ropsten.alchemyapi.io/v2/2vcXaK3xR2xUx2XYhEVzfpX7maV4uHlp';
const customHttpProvider = new ethers.providers.JsonRpcProvider(nodeProvider);

//ERC-20 contract address
const contractAddress = '0xd4f2d4b9Fc0D49f35858d27492DAF3Eaefa95932';
const myWalletAddress = '0xcc4ea7d82659a39a091393d9b5a1d991bbe6daa2';

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, customHttpProvider);

const contract = new ethers.Contract(contractAddress, ERC20.abi, signer);

const result = await contract.transfer(myWalletAddress, 1);


console.log(`Transfer: ${JSON.stringify(result)}`)