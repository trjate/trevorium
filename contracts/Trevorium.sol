pragma solidity ^0.5;

contract Trevorium {
  string public name;
  string public symbol;
  uint256 public totalSupply;

  mapping(address => uint256) public balanceOf; 

  constructor(uint256 _initialSupply, string memory _name, string memory _symbol) public {
    balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;
    name = _name;
    symbol = _symbol;
  }
  
  function transfer(address _to, uint256 _value) public returns (bool success) {
  }
    // throw exception if account doesn't have enough

}
