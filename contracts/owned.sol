// SPDX-License-Identifier: MIT
pragma solidity 0.5.1;

contract owned {
	address owner;

	modifier onlyowner() {
		require(msg.sender == owner);
		_;
	}

	function getOwner() public view returns (address) {
		return owner;
	}
}