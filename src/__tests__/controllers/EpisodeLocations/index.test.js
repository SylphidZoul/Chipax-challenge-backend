const { episodeLocationsController: { getLocationsPerEpisode } } = require('../../../controllers')
const { rickAndMortyAPI: { getAllRickAndMortyAPIData } } = require('../../../services')
const {
  episodeLocationMock: { episodeMock, episodeLocationsMock, charactersMock }
} = require('../../../utils/__mocks__')

jest.mock('../../../services')

describe('charCounters controllers', () => {
  it('Should return a list of characters origin locations of all episodes', async (done) => {
    getAllRickAndMortyAPIData.mockImplementation((endpoint) =>
      (endpoint === 'character'
        ? charactersMock
        : [episodeMock, episodeMock, episodeMock]
      )
    )
    const result = await getLocationsPerEpisode()

    expect(result).toStrictEqual({
      episodeLocations: [episodeLocationsMock, episodeLocationsMock, episodeLocationsMock],
      executionTime: '0s 0ms'
    })
    done()
  })
})
