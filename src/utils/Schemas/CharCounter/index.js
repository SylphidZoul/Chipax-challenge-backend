const Joi = require('joi')

const letter = Joi.string().pattern(/^([a-z]{1}|)$/).allow(null, '')

const charCounterQueryValidation = Joi.object({
  character_letter: letter,
  episode_letter: letter,
  location_letter: letter
})

const letterErrMessage = 'The letter query must be a single character beetween a-z.'

module.exports = { charCounterQueryValidation, letterErrMessage }
