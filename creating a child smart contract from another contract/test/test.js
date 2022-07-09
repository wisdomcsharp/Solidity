const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Main", function () {
  it("Deploy and test Main contract", async function () {


    const Main = await ethers.getContractFactory("Main");
    const main = await Main.deploy();
    await main.deployed();

    await main.addNewChildContract("Child Contract No.1");
    await main.addNewChildContract("Child Contract No.2");


  });
});