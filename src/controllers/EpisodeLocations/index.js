const { rickAndMortyAPI: { getAllRickAndMortyAPIData } } = require('../../services/')
const { getEpisodeLocations } = require('../../utils')

const getLocationsPerEpisode = async () => {
  const timeStart = process.hrtime()
  const listsPromises = [
    getAllRickAndMortyAPIData('episode'), getAllRickAndMortyAPIData('character')
  ]
  const [episodesList, charactersList] = await Promise.all(listsPromises)

  const locationsByCharacterId = charactersList.reduce((dic, character) => {
    dic[character.id] = character.origin.name
    return dic
  }, {})

  const episodeLocations = episodesList
    .map(episode => getEpisodeLocations(episode, locationsByCharacterId))

  const [seconds, nanoseconds] = process.hrtime(timeStart)
  const executionTime = `${seconds}s ${Math.floor(nanoseconds / 1000000)}ms`

  return { episodeLocations, executionTime }
}

module.exports = {
  getLocationsPerEpisode
}
