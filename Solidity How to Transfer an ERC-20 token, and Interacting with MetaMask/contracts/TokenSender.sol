//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {IERC20} from "./IERC20.sol";

contract TokenSender {
   
    constructor() {}

    function sendToken(
        uint256 _amount,
        address _to,
        address _token
    ) public {
        require(IERC20(address(_token)).balanceOf(address(this)) >= _amount);
        IERC20(_token).transfer(_to, _amount);
    }
}
