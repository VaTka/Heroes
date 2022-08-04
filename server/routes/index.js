const Routes = require('express')
const router = new Routes()
const heroRouter= require('./heroRouter')

router.use('/hero', heroRouter)

module.exports = router
