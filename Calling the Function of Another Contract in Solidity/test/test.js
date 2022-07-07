const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FunxCaller", function () {
  it("Deploy FunxCaller", async function () {

    const FunxCaller = await ethers.getContractFactory("FunxCaller");
    const funxCaller = await FunxCaller.deploy();
    await funxCaller.deployed();

    await funxCaller.setUsingStorageFunxCaller(0, 93570293);
    console.log("funxcallter address ", funxCaller.address)

    
  });
});