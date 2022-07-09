const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultiNetworkDeployment", function () {
  it("Deploy contract", async function () {


    const MultiNetworkDeployment = await ethers.getContractFactory("MultiNetworkDeployment");
    const multiNetworkDeployment = await MultiNetworkDeployment.deploy();
    await multiNetworkDeployment.deployed();


    console.log("Contract deployed at Address: ", multiNetworkDeployment.address)

  });
});