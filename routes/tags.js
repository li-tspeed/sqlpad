var _ = require('lodash')
var router = require('express').Router()
var Query = require('../models/Query.js')


router.get('/api/tags', function (req, res) {
  Query.findAll(function (err, queries) {
    if (err) {
      console.error(err)
      return res.json({
        error: 'Problem querying query database'
      })
    }
    var tags = _.uniq(_.flatten(_.map(queries, 'tags'))).sort()
    tags = tags.filter(function (t) {
      if (t) return t
    })
    res.json({
      tags: tags
    })
  })
})

module.exports = router
