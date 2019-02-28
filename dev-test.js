// dev-test.js

const Block = require('./Block')

const fooBlock = Block.mineBlock(Block.genesis(), 'foo')

console.log(fooBlock.toString())

// console.log(block.toString())
// console.log(Block.genesis().toString())
