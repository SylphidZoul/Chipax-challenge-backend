const supertest = require('supertest')
const app = require('../App')
const { letterErrMessage } = require('../utils/Schemas/CharCounter')
const {
  episodeLocationMock: { episodeLocationResponseMock },
  charCountersMock: { charCountersResponseMock, specificCounterResponseMock }
} = require('../utils/__mocks__')

const request = supertest(app)

describe('App end to end tests', () => {
  describe('/episodelocations get endpoint', () => {
    it('Should return a list of episodes with its characters origin locations', async (done) => {
      const response = await request.get('/episodelocations')

      expect(response.status).toBe(200)
      expect(response.body.data.episodeLocations[0]).toStrictEqual(episodeLocationResponseMock)
      expect(response.body.data.executionTime).toMatch(/^.s....ms/)
      done()
    })
  })

  describe('/charcounter get endpoint', () => {
    it('Should return a list of default charCounters by rickandmortys endpoint', async (done) => {
      const response = await request.get('/charcounter')

      expect(response.status).toBe(200)
      expect(response.body.data.countList).toStrictEqual(charCountersResponseMock)
      expect(response.body.data.executionTime).toMatch(/^.s....ms/)
      done()
    })

    it('Should return a list of specific characters counts', async (done) => {
      const response = await request.get('/charcounter?location_letter=a&character_letter=e&episode_letter=h')

      expect(response.status).toBe(200)
      expect(response.body.data.countList).toStrictEqual(specificCounterResponseMock)
      expect(response.body.data.executionTime).toMatch(/^.s....ms/)
      done()
    })

    it('Should complain about a letter query', async (done) => {
      const response = await request.get('/charcounter?location_letter=23a')

      expect(response.status).toBe(400)
      expect(response.body.data.message).toBe(letterErrMessage)
      done()
    })
  })
})
