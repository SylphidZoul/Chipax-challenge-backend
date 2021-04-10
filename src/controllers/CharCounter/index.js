const getCounts = async (req, res) => {
  return {
    lettersCInCharacters: Math.floor(Math.random() * 1000),
    lettersEInEpisodes: Math.floor(Math.random() * 1000),
    lettersLInLocations: Math.floor(Math.random() * 1000),
    elapsedTime: `${Math.floor(Math.random() * 1000)} ms.`
  }
}

module.exports = {
  getCounts
}
