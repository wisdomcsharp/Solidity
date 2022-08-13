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
        assetRecipient: Owner,
        poolType: "0",
        delta: "0",
        fee: "0",
        spotPrice: hre.ethers.utils.parseEther("0.02"),
        initialNFTIDs: [0, 1],
        initialTokenBalance: "2"
    }


    //enable allowances, before transfer
    const LSSVMPairMissingEnumerableETHPair0 = await hre.ethers.getContractAt("LSSVMPairMissingEnumerableETH", Pair0Address)
    const getAllHeldIds = await LSSVMPairMissingEnumerableETHPair0.getAllHeldIds();
    const bondingCurve = await LSSVMPairMissingEnumerableETHPair0.bondingCurve();
    const getBuyNFTQuote = await LSSVMPairMissingEnumerableETHPair0.getBuyNFTQuote(2);

    //@devs once you've recieved the pair address from the  NewPair(address(pair)); event, 
    //you can use the isPair functio in the LSSVMPairFactory to validate if addresses are pairs, this can take
    //PairVariant from 0 to 3 where 0=ENUMERABLE_ERC20 1=MISSING_ENUMERABLE_ERC20 2=ENUMERABLE_ETH 3=MISSING_ENUMERABLE_ETH

    //once you have a pair, look at the contract@Variant types where it lists all external and public functions (most are inherited) to get more data


    console.log(
        `getAllHeldIds: ${getAllHeldIds}
bondingCurve: ${bondingCurve}
getBuyNFTQuote: ${getBuyNFTQuote}`


    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
