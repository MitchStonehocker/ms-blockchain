// dev-test.js

const Block = require('./Block')

const fooBlock = Block.mineBlock(Block.genesis(), 'foo')

console.log(fooBlock.toString())

// block = new Block('boo','foo','too','zoo')
// console.log(block.toString())
// console.log(Block.genesis().toString())
