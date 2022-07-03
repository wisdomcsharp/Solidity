pragma solidity ^0.8.1;

import {IERC20} from "./IERC20.sol";

interface X {
    function setValue(uint256 _x) external;
}

interface Y is X {
    function getValue() external returns (uint256);
}

contract Z is Y {
    uint256 x;

    function setValue(uint256 _x) external override {
        x = _x;
    }

    function getValue() external view virtual override returns (uint256) {
        return x;
    }

    function getUserTokenBalance(address _token, address _user)
        public
        view
        returns (uint256 _balance)
    {
        _balance = IERC20(_token).balanceOf(_user);
    }
}

contract A is Z {
    function getValue() external view override returns (uint256) {
        return x;
    }
}
