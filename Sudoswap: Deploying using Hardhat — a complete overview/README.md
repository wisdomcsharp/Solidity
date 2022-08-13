# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.js
node scripts/deploy.js
npx eslint '**/*.js'
npx eslint '**/*.js' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# ROPSTEN
  ```
 ·-----------------------------------|--------------|----------------·
 |  Contract Name                    ·  Size (KiB)  ·  Change (KiB)  │
 ····································|··············|·················
 |  CurveErrorCodes                  ·       0.062  ·                │
 ····································|··············|·················
 |  TestVerify                       ·       0.062  ·                │
 ····································|··············|·················
 |  LSSVMPairCloner                  ·       0.084  ·                │
 ····································|··············|·················
 |  Strings                          ·       0.084  ·                │
 ····································|··············|·················
 |  Address                          ·       0.084  ·                │
 ····································|··············|·················
 |  SafeTransferLib                  ·       0.084  ·                │
 ····································|··············|·················
 |  FixedPointMathLib                ·       0.084  ·                │
 ····································|··············|·················
 |  ERC165Checker                    ·       0.084  ·                │
 ····································|··············|·················
 |  EnumerableSet                    ·       0.084  ·                │
 ····································|··············|·················
 |  TestPairManager                  ·       0.240  ·                │
 ····································|··············|·················
 |  ERC1155Holder                    ·       0.933  ·                │
 ····································|··············|·················
 |  LinearCurve                      ·       1.521  ·                │
 ····································|··············|·················
 |  ExponentialCurve                 ·       1.655  ·                │
 ····································|··············|·················
 |  Test20                           ·       2.811  ·                │
 ····································|··············|·················
 |  ERC721                           ·       4.308  ·                │
 ····································|··············|·················
 |  Test721                          ·       4.677  ·                │
 ····································|··············|·················
 |  ERC1155                          ·       4.971  ·                │
 ····································|··············|·················
 |  Test1155                         ·       5.341  ·                │
 ····································|··············|·················
 |  Test721Enumerable                ·       5.728  ·                │
 ····································|··············|·················
 |  LSSVMPairFactory                 ·       7.090  ·                │
 ····································|··············|·················
 |  LSSVMRouter                      ·      12.902  ·                │
 ····································|··············|·················
 |  LSSVMPairEnumerableETH           ·      14.759  ·                │
 ····································|··············|·················
 |  LSSVMPairMissingEnumerableETH    ·      15.107  ·                │
 ····································|··············|·················
 |  LSSVMPairEnumerableERC20         ·      15.332  ·                │
 ····································|··············|·················
 |  LSSVMPairMissingEnumerableERC20  ·      15.681  ·                │
 ·-----------------------------------|--------------|----------------·

  Deploy
lSSVMPairEnumerableETH deployed at Address:  0x4417CC5eF9BE76C9D6b31fD76350892ff102d1f9
    ✓ Will deploy LSSVMPairEnumerableETH contract (8110396 gas)
LSSVMPairMissingEnumerableETH deployed at Address:  0x097F571FBB000187E4cCc23e4324c42632095190
    ✓ Will deploy LSSVMPairMissingEnumerableETH contract (6622082 gas)
LSSVMPairEnumerableERC20 deployed at Address:  0xF5b762048FD79C888AB762B7A883a39430a4002D
    ✓ Will deploy LSSVMPairEnumerableERC20 contract (5463666 gas)
LSSVMPairMissingEnumerableERC20 deployed at Address:  0xEe0d4dFA707c736560F15DCAee46b943Af031f92
    ✓ Will deploy LSSVMPairMissingEnumerableERC20 contract (8879345 gas)
LSSVMPairFactory deployed at Address:  0xC3f96ebFD5f3bBebe7c209715c3229F1194e3233
constructor args: "0x4417CC5eF9BE76C9D6b31fD76350892ff102d1f9" "0x097F571FBB000187E4cCc23e4324c42632095190" "0xF5b762048FD79C888AB762B7A883a39430a4002D" "0xEe0d4dFA707c736560F15DCAee46b943Af031f92" "0xCC4EA7D82659A39A091393D9b5A1D991BbE6dAA2" "0"
    ✓ Will deploy LSSVMPairFactory contract (4778832 gas)
LSSVMRouter deployed at Address:  0x42e6B6e1D2fA70685E78bAD0c0ED6188E627179e
    ✓ Will deploy LSSVMRouter contract (8715776 gas)
LSSVMRouter has been whitelisted in Factory:  0x9043424ba39294158bf61ce63f8c675957b2b8f92c069712254c6fcfcf964ca2
    ✓ Will Whitelist router in factory (1292310 gas)
ExponentialCurve deployed at Address:  0x21440C6564083e48a817e41bb9244556de2D8490
    ✓ Will deploy ExponentialCurve contract (10017049 gas)
LinearCurve deployed at Address:  0xe2DdA05775c8832A57B9F21512d903968e36c5E3
    ✓ Will deploy LinearCurve contract (2897421 gas)
ExponentialCurve whitelisted at:  0x0b118dd7e6c7409b7e61188f32d6e8ab6b83a96b40061e31dc35aff3f9fc84e6
LinearCurve whitelisted at:  0x1988d15d36374c46f5c5af0874d1b5eb75494a422ac326e6600049ea561cd947
    ✓ Whitelist bonding curves in factory (3283424 gas)
Transferred factory ownership.
New Owner:  0xCC4EA7D82659A39A091393D9b5A1D991BbE6dAA2 
Hash:  0xaa93f79216279a01b8386032c14f60b1000c39acb9e1c464e8fe828fa2b09480
    ✓ Transfer factory ownership to admin (3588924 gas)

  Mock Tokens
    ✓ Will deploy TestVerify (1786761 gas)
721 Token deployed at Address:  0xAD5de465CD156bCD02eaB9A59be0Fa4d0302993B
    ✓ Will Mint Tokens 721 NFT (4227727 gas)
1155 Token deployed at Address:  0xf177E7FE5Bc2C8eB1e4F524527d68560e7e0AE89
    ✓ Will Mint Tokens 1155 NFT (2657024 gas)

·-----------------------------------------------|---------------------------|-------------|----------------------------·
|              Solc version: 0.8.4              ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 6718946 gas  │
················································|···························|·············|·····························
|  Methods                                                                                                             │
·····················|··························|·············|·············|·············|··············|··············
|  Contract          ·  Method                  ·  Min        ·  Max        ·  Avg        ·  # calls     ·  usd (avg)  │
·····················|··························|·············|·············|·············|··············|··············
|  ERC721            ·  approve                 ·      29095  ·      59975  ·      41421  ·          10  ·          -  │
·····················|··························|·············|·············|·············|··············|··············
|  LSSVMPairFactory  ·  setBondingCurveAllowed  ·          -  ·          -  ·      47712  ·           2  ·          -  │
·····················|··························|·············|·············|·············|··············|··············
|  LSSVMPairFactory  ·  setRouterAllowed        ·          -  ·          -  ·      50184  ·           1  ·          -  │
·····················|··························|·············|·············|·············|··············|··············
|  LSSVMPairFactory  ·  transferOwnership       ·          -  ·          -  ·      25891  ·           1  ·          -  │
·····················|··························|·············|·············|·············|··············|··············
|  Test20            ·  transfer                ·      29690  ·      46097  ·      36011  ·           5  ·          -  │
·····················|··························|·············|·············|·············|··············|··············
|  Deployments                                  ·                                         ·  % of limit  ·             │
················································|·············|·············|·············|··············|··············
|  ExponentialCurve                             ·          -  ·          -  ·     419130  ·       6.2 %  ·          -  │
················································|·············|·············|·············|··············|··············
|  LinearCurve                                  ·          -  ·          -  ·     389405  ·       5.8 %  ·          -  │
················································|·············|·············|·············|··············|··············
|  LSSVMPairEnumerableERC20                     ·          -  ·          -  ·    3443139  ·      51.2 %  ·          -  │
················································|·············|·············|·············|··············|··············
|  LSSVMPairEnumerableETH                       ·          -  ·          -  ·    3316625  ·      49.4 %  ·          -  │
················································|·············|·············|·············|··············|··············
|  LSSVMPairFactory                             ·          -  ·          -  ·    1675404  ·      24.9 %  ·          -  │
················································|·············|·············|·············|··············|··············
|  LSSVMPairMissingEnumerableERC20              ·          -  ·          -  ·    3519883  ·      52.4 %  ·          -  │
················································|·············|·············|·············|··············|··············
|  LSSVMPairMissingEnumerableETH                ·          -  ·          -  ·    3393188  ·      50.5 %  ·          -  │
················································|·············|·············|·············|··············|··············
|  LSSVMRouter                                  ·          -  ·          -  ·    2906853  ·      43.3 %  ·          -  │
················································|·············|·············|·············|··············|··············
|  Test1155                                     ·          -  ·          -  ·    1261526  ·      18.8 %  ·          -  │
················································|·············|·············|·············|··············|··············
|  Test721                                      ·          -  ·          -  ·    1137644  ·      16.9 %  ·          -  │
·-----------------------------------------------|-------------|-------------|-------------|--------------|-------------·

  14 passing (12m)
    ```