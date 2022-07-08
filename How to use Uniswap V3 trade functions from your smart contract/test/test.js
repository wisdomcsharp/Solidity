const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SwapExamples", function () {
  it("Should Deploy SwapExamples and make a swapExactInputMultihop swap", async function () {

    //updated addresses
    const DAI = "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa";
    const WETH9 = "0xd0A1E359811322d97991E03f863a0C30C2cF029C";
    const UNI = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";


    const SwapExamples = await ethers.getContractFactory("SwapExamples");
    const swapExamples = await SwapExamples.deploy("0xE592427A0AEce92De3Edee1F18E0157C05861564");
    await swapExamples.deployed();

    swapExamplesAddress = swapExamples.address;

    //connect account to WETH contract
    let WETH9Contract = await ethers.getContractAt("IERC20", WETH9);

    // const getAccounts = await ethers.getSigner();
    // WETH9Contract = await WETH9Contract.connect(getAccounts.address);


    const approvalAmount = BigInt(0.05 * (10 ** 18));
    let approvalRequesst = await WETH9Contract.approve(swapExamples.address, approvalAmount);
    await approvalRequesst.wait();

    console.log(approvalRequesst)
    let swapExactInputMultihop = await swapExamples.swapExactInputMultihop(approvalAmount);
    await swapExactInputMultihop.wait();

    //ACTIONS - DO something cool

    console.log("appro: ", approvalRequesst)
    console.log("swapExactInputMultihop: ", swapExactInputMultihop)

    //NOTE this test is purely for educational purposes...

  });
});