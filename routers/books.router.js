const Router = require('express')
const boookController = require('../controllers/books.controller')
const authntiction = require('../middlewares/auth')
const router = Router()


router.post('/api/books',authntiction, boookController.addOneBook)
router.get('/api/books',authntiction, boookController.getAllBooks)
router.delete('/api/books/:id',authntiction, boookController.deleteOneBook)

module.exports = router