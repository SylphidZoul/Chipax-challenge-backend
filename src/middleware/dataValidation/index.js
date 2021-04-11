const { Response } = require('../../utils/')
const { letterErrMessage } = require('../../utils/Schemas/CharCounter')

const generateErrorMessage = (failedInput) => {
  switch (failedInput) {
    case 'character_letter':
    case 'episode_letter':
    case 'location_letter':
      return letterErrMessage
    default:
      return `The ${failedInput} is not valid or not allowed.`
  }
}

const dataValidation = (schema, check = 'query') => (req, res, next) => {
  const { error } = schema.validate(req[check])
  error
    ? Response.error(res, error, generateErrorMessage(error.details[0].path[0]), 400)
    : next()
}

module.exports = dataValidation
