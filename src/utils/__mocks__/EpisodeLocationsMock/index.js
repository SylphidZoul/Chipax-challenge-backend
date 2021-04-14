const episodeLocationResponseMock = {
  name: 'Pilot',
  episode: 'S01E01',
  locations: [
    'Earth (C-137)',
    'Bepis 9',
    'Gromflom Prime',
    'unknown',
    'Girvonesk'
  ],
  locationsQuantity: 5,
  charactersQuantity: 19
}

const episodeMock = {
  id: 1,
  name: 'Pilot',
  air_date: 'December 2, 2013',
  episode: 'S01E01',
  characters: [
    'https://rickandmortyapi.com/api/character/1',
    'https://rickandmortyapi.com/api/character/2',
    'https://rickandmortyapi.com/api/character/3',
    'https://rickandmortyapi.com/api/character/4',
    'https://rickandmortyapi.com/api/character/5',
    'https://rickandmortyapi.com/api/character/6',
    'https://rickandmortyapi.com/api/character/7',
    'https://rickandmortyapi.com/api/character/8'
  ],
  url: 'https://rickandmortyapi.com/api/episode/1',
  created: '2017-11-10T12:56:33.798Z'
}

const locationsByIdMock = {
  1: 'Ōnojō',
  2: 'Studzienice',
  3: 'Szynwałd',
  4: 'Samanco',
  5: 'Samanco',
  6: 'Studzienice',
  7: 'Stockholm',
  8: 'Samanco'
}

const episodeLocationsMock = {
  charactersQuantity: 8,
  episode: 'S01E01',
  locations: [
    'Ōnojō',
    'Studzienice',
    'Szynwałd',
    'Samanco',
    'Stockholm'
  ],
  locationsQuantity: 5,
  name: 'Pilot'
}

const charactersMock = [
  {
    id: 1,
    origin: { name: 'Ōnojō' }
  },
  {
    id: 2,
    origin: { name: 'Studzienice' }
  },
  {
    id: 3,
    origin: { name: 'Szynwałd' }
  },
  {
    id: 4,
    origin: { name: 'Samanco' }
  },
  {
    id: 5,
    origin: { name: 'Samanco' }
  },
  {
    id: 6,
    origin: { name: 'Studzienice' }
  },
  {
    id: 7,
    origin: { name: 'Stockholm' }
  },
  {
    id: 8,
    origin: { name: 'Samanco' }
  }
]

module.exports = {
  episodeLocationResponseMock,
  episodeMock,
  locationsByIdMock,
  episodeLocationsMock,
  charactersMock
}
