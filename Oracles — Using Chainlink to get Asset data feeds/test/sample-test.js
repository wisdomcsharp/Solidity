const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Chainlink", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Chainlink = await hre.ethers.getContractFactory("Chainlink");
    const chainlink = await Chainlink.deploy();
    await chainlink.deployed();

    expect(await chainlink.getPrice()).to.be.an("object");

  });
});
