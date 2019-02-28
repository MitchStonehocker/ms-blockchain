// blockchain/block.test.js

const Blockchain = require('./index')
const Block = require('./block')

describe('Blockchain', () => {
  let bc, bc2

  beforeEach(() => {
    bc = new Blockchain()
    bc2 = new Blockchain()
  })

  it('start with genesis block', () => {
    expect(bc.chain[0]).toEqual(Block.genesis())
  })

  it('adds a new block', () => {
    const data = 'foo'
    bc.addBlock(data)
    expect(bc.chain[bc.chain.length - 1].data).toEqual(data)
  })

  it('validates a valid chain', () => {
    bc2.addBlock('foo')
    // expect(bc.isValidChain(bc2.chain)).toBe(true)
    expect(bc.isValidChain(bc2.chain)) === true
  })

  it('invalidates a chain with a corrupt genesis block', () => {
    bc2.chain[0].data == 'Bad data'
    expect(bc.isValidChain(bc2.chain)) === false
  })

  it('invalidate a corrupt chain not genesis', () => {
    bc2.addBlock('foo')
    bc2.chain[1].data = 'Not foo'
    expect(bc.isValidChain(bc2.chain)) === false
  })

  //   it('replaces chain with a valid chain', () => {
  //     console.log('>>>-bc2->', bc2, '>>>-bc->', bc)
  //     bc2.addBlock('goo')
  //     bc.replaceChain(bc2.chain)
  //     expect(bc.chain).toEqual(bc2.chain)
  //   })

  it('new chain does not replace if <= prior', () => {
    bc.addBlock('foo')
    bc.replaceChain(bc2.chain)
    expect(bc.chain).not.toEqual(bc2.chain)
  })
})
