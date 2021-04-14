const axios = require('axios')
const { API: { SERVICES: { RICK_AND_MORTY_API } } } = require('../../../config')

const getAllIDs = async (endpoint) => {
  const { data: { info: { count } } } = await axios.get(`${RICK_AND_MORTY_API}${endpoint}`)

  const allIDsList = Array.from({ length: count }, (_, i) => i + 1)

  return allIDsList
}

const getAllRickAndMortyAPIData = async (endpoint) => {
  const allIDsList = await getAllIDs(endpoint)
  const { data } = await axios.get(`${RICK_AND_MORTY_API}${endpoint}/${allIDsList}`)

  return data
}

module.exports = {
  getAllRickAndMortyAPIData
}
