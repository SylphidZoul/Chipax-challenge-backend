const { charCounter } = require('../../../utils')
const { charCountersMock: { namesMock } } = require('../../../utils/__mocks__')

describe('CharCounter util', () => {
  it('Should count a specific character in an array of names', () => {
    const aCharsInNames = charCounter(namesMock, 'a')
    const sCharsInNames = charCounter(namesMock, 's')
    expect(aCharsInNames).toEqual(7)
    expect(sCharsInNames).toEqual(2)
  })
})
