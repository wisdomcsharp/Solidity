const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Random", function () {
  it("Should return random Number", async function () {
    const Random = await ethers.getContractFactory("Random");
    const random = await Random.deploy();
    await random.deployed();


    await random.randomNumber("0x21231231231");
    await random.randomNumber("0x21231231231");


    // expect(await random.randomNumber()).to.equal("lol, can't do equals for rands ;)");
    // wait until the transaction is mined
  });
});
