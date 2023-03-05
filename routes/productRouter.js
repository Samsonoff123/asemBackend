const Router = require('express')
const router = new Router()
const ProductController = require('../controllers/productController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), ProductController.create)
router.post('/set-rating/:id', ProductController.setRating)
router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getOne)
router.delete('/:id', checkRole('ADMIN'), ProductController.remove)

module.exports = router