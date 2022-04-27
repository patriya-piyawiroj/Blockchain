const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "512c97886d62423cb2bb25e8cd6ca443";

// const fs = require('fs');
const mnemonic = "cover tilt bird news valley lend surface sentence kiwi wish carpet trial";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};