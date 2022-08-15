import { ethers } from "ethers";
import ERC20 from "./ERC20.js";
import ERC721 from "./ERC721.js";

import 'dotenv/config'

//Node Provider Addres
const nodeProvider = 'https://eth-ropsten.alchemyapi.io/v2/2vcXaK3xR2xUx2XYhEVzfpX7maV4uHlp';
const customHttpProvider = new ethers.providers.JsonRpcProvider(nodeProvider);

//ERC-20 contract address
const contractAddress = '0xAD5de465CD156bCD02eaB9A59be0Fa4d0302993B';
const myWalletAddress = '0xcc4ea7d82659a39a091393d9b5a1d991bbe6daa2';

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, customHttpProvider);

const contract = new ethers.Contract(contractAddress, ERC721.abi, signer);

const result = await contract.transferFrom(myWalletAddress, myWalletAddress, 2);


console.log(`Transfer: ${JSON.stringify(result)}`)