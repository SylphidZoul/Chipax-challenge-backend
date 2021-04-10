const { Router } = require('express')
const charCounterRouter = require('./CharCounter')
const episodeLocationsRouter = require('./EpisodeLocations')

const router = Router()

router.use('/charcounter', charCounterRouter)
router.use('/episodelocations', episodeLocationsRouter)

module.exports = router
