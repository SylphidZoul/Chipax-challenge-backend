const router = require('express').Router()
const { charCounterController } = require('../../controllers')
const { controllerTryCatchWrapper } = require('../../utils')

router.get(
  '/',
  controllerTryCatchWrapper({
    sucessStatusCode: 200,
    errorStatusCode: 500,
    controller: charCounterController.getCounts
  })
)
module.exports = router
