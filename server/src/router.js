const authController = require('./controllers/authController')

module.exports = app => {
  app.post('/register', authController.register)
  app.post('/login', authController.login)
}



//points to a controller
