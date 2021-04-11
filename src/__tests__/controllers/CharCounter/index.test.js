const { charCounterController: { getCounts } } = require('../../../controllers')
const { rickAndMortyAPI: { getAllRickAndMortyAPIData } } = require('../../../services')
const {
  charCountersMock:
  { namesMock, mockedControllerDefaultResponse, mockedControllerSpecificResponse }
} = require('../../../utils/__mocks__')

jest.mock('../../../services')

describe('charCounters controllers', () => {
  beforeAll(() => {
    getAllRickAndMortyAPIData.mockResolvedValue(namesMock)
  })

  it('Should return a list of charCounts by RickAndMortyAPIs endpoints', async (done) => {
    const result = await getCounts({ query: '' })

    expect(result).toStrictEqual(mockedControllerDefaultResponse)
    done()
  })

  it('Should return a list of specific charCounts', async (done) => {
    const result = await getCounts({
      query: {
        location_letter: 'b',
        episode_letter: 'g',
        character_letter: 'i'
      }
    })

    expect(result).toStrictEqual(mockedControllerSpecificResponse)
    done()
  })
})
