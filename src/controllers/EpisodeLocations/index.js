const getLocationsPerEpisode = async (req, res) => {
  return {
    episodes: [],
    elapsedTime: `${Math.floor(Math.random() * 1000)} ms.`
  }
}

module.exports = {
  getLocationsPerEpisode
}
