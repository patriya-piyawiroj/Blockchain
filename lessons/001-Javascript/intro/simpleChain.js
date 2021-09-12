const SHA256 = require(crypto.js/SHA256)

class Block{
    constructor(data) {
        this.hash = "",
        this.height = 0,
        this.body = data,
        this.time = 0,
        this.previousblockhash = ""
    }
}

class Blockchain{
    constructor() {
        this.chain = [];
        this.addBlock(new Block("Genesis block"))
    }
    addBlock(newBlock) {
        newBlock.height = this.chain.length;
        newBlock.time = new Date().getTime().toString().slice(0,-3)
        if(this.chain.length > 0) {
            newBlock.previousblockhash = this.chain(this.chain.length-1).hash
        }
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        this.chain.push(newBlock)
    }
} 