var Web3 = require('web3')
const EthereumTx = require('ethereumjs-tx').Transaction
var url = 'HTTP://127.0.0.1:7545'  
var web3 = new Web3(url)
web3.eth.getAccounts().then(accounts => console.log(accounts))

var sendingAddress = '0xA6a9BC8bC169DD9461CaCA21b8b1b19B140981A8'
var receivingAddress = '0x2570139498fe8B86d2d011A811350346FEB3e04f'

web3.eth.getBalance(receivingAddress).then(console.log)

var rawTransaction = {
  nonce: '0x00',
  gasPrice: '0x09184e72a000',
  gasLimit: '0x2710',
  to: receivingAddress,
  value: '0x00',
  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
}

const privateKeySender = 'abee35389ae70586a64106a66fe185c422c7fa19439de5dd07fbe77ed6be4dfa'
const privateKeySenderHex = Buffer.from(privateKeySender, 'hex')
const transaction = new EthereumTx(rawTransaction, {chain: 'rinkeby', hardfork: 'petersburg'})
transaction.sign(privateKeySenderHex)

var serializedTransaction = transaction.serialize()
web3.eth.sendSignedTransaction(serializedTransaction)
.then("Successfully sent transaction")
.catch(err => {console.log(err)})