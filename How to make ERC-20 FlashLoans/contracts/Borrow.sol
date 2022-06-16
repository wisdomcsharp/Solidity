//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20FlashMint.sol";

contract Borrow {
    bytes32 private constant _RETURN_VALUE =
        keccak256("ERC3156FlashBorrower.onFlashLoan");

    struct FlashLoaned {
        address initiator;
        address token;
        uint256 amount;
        uint256 fee;
        bytes data;
    }

    mapping(address => FlashLoaned) public myFlashLoaned;

    event FlashLoanedEvent(bytes data);

    function onFlashLoan(
        address initiator,
        address token,
        uint256 amount,
        uint256 fee,
        bytes calldata data
    ) external returns (bytes32) {
        myFlashLoaned[initiator] = FlashLoaned({
            initiator: initiator,
            token: token,
            amount: amount,
            fee: fee,
            data: data
        });

        ERC20FlashMint(token).approve(token, amount + fee);

        emit FlashLoanedEvent(data);
        return _RETURN_VALUE;
    }

    function borrow(
        address _token,
        uint256 _amount,
        bytes calldata _data
    ) external {
        ERC20FlashMint(_token).flashLoan(
            IERC3156FlashBorrower(address(this)),
            _token,
            _amount,
            _data
        );
    }
}
