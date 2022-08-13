const hre = require("hardhat");

async function main() {

    let LSSVMPairFactoryAddress = "0xC3f96ebFD5f3bBebe7c209715c3229F1194e3233";
    let LSSVMRouterAddress = "0x42e6B6e1D2fA70685E78bAD0c0ED6188E627179e";
    let Owner = "0xCC4EA7D82659A39A091393D9b5A1D991BbE6dAA2";
    let NFTIds = [0, 1];
    let linearCurve = "0xe2DdA05775c8832A57B9F21512d903968e36c5E3";
    let exponentialCurve = "0x21440C6564083e48a817e41bb9244556de2D8490"

    let randomToken = "0x145e0baa1fadeCD861e1FA1b2CE5B4c3aCdfe782";
    let NFTAddress = "0xAD5de465CD156bCD02eaB9A59be0Fa4d0302993B";
    // const lockedAmount = hre.ethers.utils.parseEther("1");

    let Pair0Address = "0x5a1182c61c596b7a6b8790a72f72fc6ebe27b38e"

    let CreateERC20PairParams = {
        token: randomToken,
        nft: NFTAddress,
        bondingCurve: linearCurve,
        assetRecipient: Owner, //how is going to recieve the proceeds of sales
        poolType: "0",
        delta: "0", // when an NFT is purchased or sold, how much should it increment or decline by. percentage or fixed
        fee: "0", // fee
        spotPrice: hre.ethers.utils.parseEther("0.02"), //price of each NFT
        initialNFTIDs: [0, 1], //how many NFTs you want to transfer
        initialTokenBalance: "2" //how many ERC-20 token you want to deposit in this pair
    }


    //enable allowances, before transfer
    {
        //adding pairs
        
        const ERC20Token = await hre.ethers.getContractAt("ERC20", randomToken)
        await ERC20Token.approve(LSSVMPairFactoryAddress, CreateERC20PairParams.initialTokenBalance)

        const ERC721Token = await hre.ethers.getContractAt("ERC721", NFTAddress);
        await ERC721Token.setApprovalForAll(LSSVMPairFactoryAddress, true);

        const LSSVMPairFactory = await hre.ethers.getContractAt("LSSVMPairFactory", LSSVMPairFactoryAddress)
        const lSSVMPairFactory = await LSSVMPairFactory.createPairERC20(CreateERC20PairParams);

        await lSSVMPairFactory.wait();
    }
    //making swaps between pairs
    //incomplete show example of using: swapERC20ForAnyNFTs
    {
        let swapERC20ForAnyNFTsParams = {
            swapList: [
                {
                    pair: Pair0Address,
                    numItems: 1
                }
            ],
            inputAmount: "",
            nftRecipient: "",
            deadline: ""
        }
       
    }

    console.log(
        `Created an ERC20 Pair: hash: ${lSSVMPairFactory.hash}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
