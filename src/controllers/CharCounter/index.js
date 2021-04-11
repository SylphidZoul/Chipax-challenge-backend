const { rickAndMortyAPI: { getAllRickAndMortyAPIData } } = require('../../services/')
const { charCounter } = require('../../utils')

const getCounts = async (req) => {
  const timeStart = process.hrtime()
  const requiredCharCountPerEndpoint = {
    character: req.query.character_letter || 'c',
    episode: req.query.episode_letter || 'e',
    location: req.query.location_letter || 'l'
  }

  const endpoints = Object.keys(requiredCharCountPerEndpoint)

  const countListPromise = endpoints
    .map(async (endpoint) => {
      const characterToCount = requiredCharCountPerEndpoint[endpoint]
      const endpointData = await getAllRickAndMortyAPIData(endpoint)
      const count = charCounter(endpointData, characterToCount)
      return { endpoint, characterToCount, count }
    })

  const countList = await Promise.all(countListPromise)

  const [seconds, nanoseconds] = process.hrtime(timeStart)
  const executionTime = `${seconds}s ${Math.floor(nanoseconds / 1000000)}ms`

  return { countList, executionTime }
}

module.exports = {
  getCounts
}
