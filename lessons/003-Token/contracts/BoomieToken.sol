pragma solidity >=0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract BoomieToken is ERC20 {

    constructor(string memory _name, string memory _symbol) 
    ERC20(_name, _symbol) public {
        _mint(msg.sender, 100);
    }
}