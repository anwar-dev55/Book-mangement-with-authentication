const Router = require('express')
const userController = require('../controller/users.controller')

const router = Router()

router.post('/api/users/register', userController.register)
router.post('/api/users/login', userController.login)

module.exports = router