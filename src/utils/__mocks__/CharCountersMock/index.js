const charCountersResponseMock = [
  {
    endpoint: 'character',
    characterToCount: 'c',
    count: 394
  },
  {
    endpoint: 'episode',
    characterToCount: 'e',
    count: 71
  },
  {
    endpoint: 'location',
    characterToCount: 'l',
    count: 73
  }
]

const specificCounterResponseMock = [
  {
    endpoint: 'character',
    characterToCount: 'e',
    count: 780
  },
  {
    endpoint: 'episode',
    characterToCount: 'h',
    count: 30
  },
  {
    endpoint: 'location',
    characterToCount: 'a',
    count: 150
  }
]

const namesMock = [
  {
    name: 'Garland'
  }, {
    name: 'Roshelle'
  }, {
    name: 'Jori'
  }, {
    name: 'Kimmi'
  }, {
    name: 'Mahala'
  }, {
    name: 'Cori'
  }, {
    name: 'Colver'
  }, {
    name: 'Selma'
  }, {
    name: 'Ric'
  }, {
    name: 'Wynn'
  }, {
    name: 'Ruben'
  }, {
    name: 'Minna'
  }
]

const mockedControllerDefaultResponse = {
  countList: [
    {
      characterToCount: 'c',
      count: 3,
      endpoint: 'character'
    },
    {
      characterToCount: 'e',
      count: 5,
      endpoint: 'episode'
    },
    {
      characterToCount: 'l',
      count: 6,
      endpoint: 'location'
    }
  ],
  executionTime: '0s 0ms'
}

const mockedControllerSpecificResponse = {
  countList: [
    {
      characterToCount: 'i',
      count: 6,
      endpoint: 'character'
    },
    {
      characterToCount: 'g',
      count: 1,
      endpoint: 'episode'
    },
    {
      characterToCount: 'b',
      count: 1,
      endpoint: 'location'
    }
  ],
  executionTime: '0s 0ms'
}

module.exports = {
  charCountersResponseMock,
  specificCounterResponseMock,
  namesMock,
  mockedControllerDefaultResponse,
  mockedControllerSpecificResponse
}
