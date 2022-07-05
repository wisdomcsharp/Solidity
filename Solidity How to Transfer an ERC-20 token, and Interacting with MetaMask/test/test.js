const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenSender", function () {
  it("Deploy Token sender", async function () {


    const TokenSender = await ethers.getContractFactory("TokenSender");
    const tokenSender = await TokenSender.deploy();
    await tokenSender.deployed();






    // const __ = await ethers.getContractFactory("__");
    // const __ = await Random.deploy();
    // await __.deployed();

  });
});