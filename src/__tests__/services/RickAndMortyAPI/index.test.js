const { rickAndMortyAPI: { getAllRickAndMortyAPIData } } = require('../../../services/')

describe('RickAndMortyAPI service', () => {
  it('Should return a complete list of data from each endpoint', async (done) => {
    const promiseCharacters = getAllRickAndMortyAPIData('character')
    const promiseLocations = getAllRickAndMortyAPIData('location')
    const promiseEpisodes = getAllRickAndMortyAPIData('episode')
    const promisesList = [promiseCharacters, promiseLocations, promiseEpisodes]

    const [charactersList, locationsList, episodesList] = await Promise.all(promisesList)

    expect(charactersList.length).toBeGreaterThan(670)
    expect(locationsList.length).toBeGreaterThan(107)
    expect(episodesList.length).toBeGreaterThan(40)
    done()
  })
})
