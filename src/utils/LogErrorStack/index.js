const { API: { ENV } } = require('../../../config')

const logErrorStack = (error) => {
  ENV === 'dev' &&
    console.warn(error)
}

module.exports = logErrorStack
