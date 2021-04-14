const router = require('express').Router()
const { episodeLocationsController } = require('../../controllers')
const { controllerTryCatchWrapper } = require('../../utils')

router.get(
  '/',
  controllerTryCatchWrapper({
    sucessStatusCode: 200,
    errorStatusCode: 500,
    controller: episodeLocationsController.getLocationsPerEpisode
  })
)

module.exports = router
