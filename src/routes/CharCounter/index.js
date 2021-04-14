const router = require('express').Router()
const { charCounterController } = require('../../controllers')
const { controllerTryCatchWrapper } = require('../../utils')
const { dataValidation } = require('../../middleware')
const { charCounterQueryValidation } = require('../../utils/Schemas/CharCounter')

router.get(
  '/',
  dataValidation(charCounterQueryValidation),
  controllerTryCatchWrapper({
    sucessStatusCode: 200,
    errorStatusCode: 500,
    controller: charCounterController.getCounts
  })
)
module.exports = router
