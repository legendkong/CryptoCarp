// SPDX-License-Identifier: UNLICENSED
//Ethereum solidity smart contract :)

pragma solidity ^0.8.0;

//Serving purpose as class in OOP languages
contract Transactions { 

 //Number of variable to hold number of transactions
 uint256 transactionCount;

 //Function to call later on, each transaction/transfer has to have address
 event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

 //Properties the transfer needs to have
 struct TransferStruct {
  address sender;
  address receiver;
  uint amount;
  string message;
  uint256 timestamp;
  string keyword;
 }

 //Transactions variable is going to be an array of transfer structures
 TransferStruct[] transactions;

 function addToBlockChain(address payable receiver, uint amount, string memory message, string memory keyword) public {
    transactionCount += 1;
    
    //Pushing a specific transaction into the transactions array, store all transactions that come through it
    transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

    //Transfer the amount 
    emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
 }


 function getAllTransactions() public view returns (TransferStruct[] memory) {
   return transactions;

 }

 function getTransactionCount() public view returns (uint256) {
   return transactionCount;

 }





}