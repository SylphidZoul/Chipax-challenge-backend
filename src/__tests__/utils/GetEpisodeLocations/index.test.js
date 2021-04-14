const { getEpisodeLocations } = require('../../../utils')
const {
  episodeLocationMock:
  { episodeMock, locationsByIdMock, episodeLocationsMock }
} = require('../../../utils/__mocks__')

describe('GetEpisodeLocations util', () => {
  it('Should return an object with characters respective origin locations', () => {
    const result = getEpisodeLocations(episodeMock, locationsByIdMock)

    expect(result).toStrictEqual(episodeLocationsMock)
  })
})
