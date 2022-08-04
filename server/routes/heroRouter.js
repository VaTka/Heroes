const Routes = require('express')
const router = new Routes()
const heroController = require('../controllers/heroController')

router.post('/', heroController.create)
router.get('/', heroController.getAll)
router.get('/:id', heroController.getOne)
router.get('/edit', heroController.edit)
router.get('/:id', heroController.delete)

module.exports = router
