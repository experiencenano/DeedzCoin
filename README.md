# DeedzCoin Smart Contract

The DeedzCoin smart contract is a decentralized application (DApp) written in Solidity, the programming language for Ethereum smart contracts. It serves as the underlying code for the DeedzCoin cryptocurrency, enabling token transfers and locking functionality.

## Features

### Token Transfers

Users can transfer DeedzCoin tokens to other addresses.

### Token Locking by Supplier

The supplier, a role with special privileges, can lock a specified amount of tokens for a specified duration, preventing them from being transferred until the lock expires. This functionality is enhanced with more control and flexibility.

### Locking with Actual Time by Supplier

The supplier can also lock tokens until a specific timestamp, ensuring they remain locked until that time.

### Supplier Role

The contract introduces a "supplier" role with special privileges, including the ability to transfer tokens while locking them and managing the distribution of tokens.

### Locking Enhancements

The supplier can extend the lock duration for a specific reason and increase the number of tokens locked for a reason.

### Unlockable Tokens and Unlock Function

The contract introduces the concept of "unlockable" tokens that can be claimed by users after passing their lock validity period. The `unlock` function allows users to claim these unlockable tokens.

### Get Unlockable Tokens Function

Users can query the contract to get the total number of unlockable tokens they have across all lock reasons.


## Usage

To use the DeedzCoin smart contract, follow these steps:

1. Deploy the smart contract to an Ethereum network of your choice (e.g., mainnet, testnet, or a local development network).
2. Interact with the deployed contract using an Ethereum wallet or DApp browser.
3. Use the following functions to interact with the DeedzCoin tokens:
   - `transfer`: Transfer DeedzCoin tokens to another address.
   - `transferWithLock`: Transfer and lock a specified amount of tokens for a specified reason and duration.
   - `transferWithLockActualTime`: Transfer and lock a specified amount of tokens until a specific timestamp.
4. Monitor events emitted by the contract to track token transfers and locking events.

## Development

To contribute to the development of the DeedzCoin smart contract, follow these steps:

1. Clone the repository and install the necessary dependencies:

shell
git clone https://github.com/your-username/deedzcoin.git
npm install
     
  
2. Commit and push your changes to your forked repository.
3. Create a pull request to the original repository, describing your changes and their purpose.

## License
The DeedzCoin smart contract is released under the MIT License.

## Acknowledgments
This smart contract was developed based on the OpenZeppelin framework, a widely adopted library for secure smart contract development on Ethereum.


   
 
   
   
