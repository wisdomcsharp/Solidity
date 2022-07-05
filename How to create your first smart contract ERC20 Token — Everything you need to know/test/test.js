const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenSender", function () {
  it("Deploy Token sender", async function () {


    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy();
    await myToken.deployed();

    console.log("MyToken Deployed To: ", myToken.address);
    //verify on etherscan, after deployment




    // const __ = await ethers.getContractFactory("__");
    // const __ = await Random.deploy();
    // await __.deployed();

  });
});