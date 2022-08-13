const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Mock Tokens", function () {
    //settings
    let ADMIN = "0xCC4EA7D82659A39A091393D9b5A1D991BbE6dAA2";

    it("Will deploy TestVerify", async function () {
        return;
        const TestVerify = await ethers.getContractFactory("TestVerify");
        const testVerify = await TestVerify.deploy();
        await testVerify.deployed();

        console.log("TestVerify deployed at Address: ", testVerify.address)

    });

    it("Will Mint Tokens 721 NFT", async function () {
        const Test721 = await ethers.getContractFactory("Test721");
        const test721 = await Test721.deploy();
        await test721.deployed();
        await test721.mint(ADMIN, 0);

        console.log("721 Token deployed at Address: ", test721.address)
    });

    it("Will Mint Tokens 1155 NFT", async function () {
        // return;
        const Test1155 = await ethers.getContractFactory("Test1155");
        const test1155 = await Test1155.deploy();
        await test1155.deployed();
        await test1155.mint(ADMIN, 0, 500);

        console.log("1155 Token deployed at Address: ", test1155.address)
    });


});