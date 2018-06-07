const authController = require('./controllers/authController')

module.exports = app => {
  app.post('/register', authController.register),
  app.post('/login', authController.login)
  app.get('/dropbox', authController.dropbox)
}



//points to a controller
