const { expect, assert } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("isContract", function () {

  let simpleStore;


  it("1. Should deploy SimpleStore contract", async function () {
    const SimpleStore = await hre.ethers.getContractFactory("SimpleStore");
    simpleStore = await SimpleStore.deploy();
    simpleStore = await simpleStore.deployed();
    assert.isOk(simpleStore);
    console.log("SimpleStore deployed at: ", simpleStore.address);
  });

  it("2. Should push add new Item at index [0]", async function () {
    const SimpleStore = await simpleStore.newItem(10);
    await SimpleStore.wait()

    const getItemAtIndex0 = await simpleStore.getItemAtIndex(0);
    expect(getItemAtIndex0).to.be.equal(10)
  });

  it("3. Should fail — set items[0] value using Memory: its still 10", async function () {
    await simpleStore.setUsingMemory(0, 11);

    const getItemAtIndex0 = await simpleStore.getItemAtIndex(0);
    expect(getItemAtIndex0).to.be.equal(10)
  });

  it("4. Should pass — set items[0] value using Storage: its now 11", async function () {
    const SimpleStore =  await simpleStore.setUsingStorage(0, 11);
    await SimpleStore.wait();

    const getItemAtIndex0 = await simpleStore.getItemAtIndex(0);
    expect(getItemAtIndex0).to.be.equal(11)
  });


});
