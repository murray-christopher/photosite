var bcrypt = require('bcrypt');
const saltRounds = 5;
const db = require('../models/query')

module.exports = {
  register(req, res) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      if(err) {
        console.log("Error creating hash for DB", err)
        return err
      }
      if(hash) {
        try {
          //not throwing an error
          const user = db.query(`Insert INTO users VALUES(default, '${req.body.first_name}',
          '${req.body.last_name}', '${hash}', '${req.body.email}') ON CONFLICT (email) DO NOTHING;`)
          res.send({ message: `${req.body.first_name} Registered Successfully`})
        }
        catch(err) {
          res.status(400).send({
            error: 'This email account is already in use.'
          })
        }
      }
    })
  },
  async login(req, res) {
    try {
      //get pass_hash
      const user = await db.query(`select pass_hash from users where email = '${req.body.email}';`)
      console.log(user.row[0].pass_hash)
      //check for match
      const match = await password.compare(req.body.password, user.row[0].pass_hash)
      if(match) {
        //login
        res.status(200).send({
          message: 'login in successful'
        })
      }
    } catch(err) {
      res.status(400).send({
        error: 'Email or pasword is incorrect'
      })
    }
  }
}
