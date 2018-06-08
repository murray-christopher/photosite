var bcrypt = require('bcrypt');
const saltRounds = 5;
const db = require('../models/query')
const config = require('../config/config')
var Dropbox = require('dropbox').Dropbox
var dbx = new Dropbox({ accessToken: config.dropbox_api })
require('es6-promise').polyfill()
require('isomorphic-fetch')


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
          const user = db.query(`Insert INTO users(id, first_name, last_name, pass_hash, email) VALUES(default, '${req.body.first_name}',
          '${req.body.last_name}', '${hash}', '${req.body.email}') ON CONFLICT (email) Do Update Set status=;`)
        }
        catch(err) {
          res.status(400).send({
            error: 'This email account is already in use.'
          })
        }
        res.send({ message: `${req.body.first_name} Registered Successfully`})
      }
    })
  },
  login(req, res) {
    try {
      //get pass_hash
      console.log(`select pass_hash from users where email = '${req.body.email}';`)
      const user = db.query(`select pass_hash from users where email = '${req.body.email}';`)
      console.log(user.row[0].pass_hash)
      //check for match
      const match = password.compare(req.body.password, user.row[0].pass_hash)
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
  },
  dropbox(req, res) {
    dbx.filesListFolder({path: '/img'})
      .then(function(response) {
        res.status(200).send(response.entries)
        console.log(response.entries)
      })
      .catch(function(error) {
        console.error(error)
      });
  }
}
