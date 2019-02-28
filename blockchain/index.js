// blockchain//index.js || blockchain/blockchain.js

const Block = require('./block')

class Blockchain {
  constructor () {
    this.chain = [Block.genesis()]
  }

  addBlock (data) {
    const block = Block.mineBlock(this.chain[this.chain.length - 1], data)
    this.chain.push(block)

    return block
  }

  isValidChain (chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      return false
    }

    for (let i = 1; i < chain.length; i++) {
      const block = chain[i]
      const lastBlock = chain[i - 1]

      if (
        block.lashHash !== lastBlock.hash ||
        block.hash !== Block.blockhash(block)
      ) {
        return false
      }
    }
    return true
  }

  replaceChain (newChain) {
    if (newChain.length <= this.chain.length) {
      console.log(
        '>>>-Blockchain-replaceChain->',
        'newChain is not longer than this.chain'
      )
      return
    } else if (!this.isValidChain(newChain)) {
      console.log('>>>-Blockchain-replaceChain->', 'newChain is not not valid')
      return
    }
    console.log(
      '>>>-Blockchain-replaceChain->',
      'replacing chain with newChain'
    )
    this.chain = newChain
  }
}

module.exports = Blockchain
