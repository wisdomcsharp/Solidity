// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20FlashMint.sol";

contract FlashToken is ERC20, ERC20FlashMint {
    constructor() ERC20("FlashToken", "FLT") {
        _mint(msg.sender, 500000 * 10 ** decimals());
    }
}
