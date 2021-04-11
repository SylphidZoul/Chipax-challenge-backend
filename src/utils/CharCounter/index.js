const charsInWord = (word, character) => {
  const formattedArrOfLetters = word.toLowerCase().split('')
  const count = formattedArrOfLetters
    .filter(letter => letter === character)
    .length

  return count
}

const charCounter = (data, character) => {
  const charCount = data.reduce((count, { name }) => {
    count += charsInWord(name, character)
    return count
  }, 0)

  return charCount
}

module.exports = charCounter
