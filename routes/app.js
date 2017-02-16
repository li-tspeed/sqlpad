var router = require('express').Router()
var getVersion = require('../lib/get-version.js')
var config = require('../lib/config.js')

// NOTE: this route needs a wildcard because it is fetched as a relative url
// from the front-end. The static SPA does not know if sqlpad is mounted at
// the root of a domain or if there is a base-url provided in the config
router.get('*/api/app', function (req, res) {
  res.json({
    config: config.getAllValues(),
    version: getVersion()
  })
})

module.exports = router
