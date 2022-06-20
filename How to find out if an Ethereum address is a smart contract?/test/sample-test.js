const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("isContract", function () {
  let testAddressDeployed;

  beforeEach(async function () {
    const TestAddress = await hre.ethers.getContractFactory("TestAddress");
    const testAddress = await TestAddress.deploy();
    testAddressDeployed = await testAddress.deployed();
  });

  it("1. Should test to see if a given address (smart contract) is from a smart contract", async function () {
    expect(await testAddressDeployed.isContract("0x25b061e0fcBB2Fbe38A5e669957eFF3DFE03d28f")).to.equal(true, "This is a DAI contract address on Kovan.");

  });

  it("2. Should test to see if a given address (none - smart contract) is from a smart contract", async function () {
    expect(await testAddressDeployed.isContract("0xcc4ea7d82659a39a091393d9b5a1d991bbe6daa2")).to.equal(false, "Kovan, none smart contract address.");
  });

  it("3. Should test to see if a given address (smart contract) is from a smart contract", async function () {
    expect(await testAddressDeployed.isContract("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2")).to.equal(true, "This is a WETH contract address on Mainnet.");
  });

  

});
