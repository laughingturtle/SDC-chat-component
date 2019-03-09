var nr = require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3028;
const grabUsernameFromDb = require('../db');
const createUserRecord = require('../db');
const deleteUsernameFromDb = require('../db');
const updateUsernameFromDb = require('../db');


app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));



app.get('/users', (req, res) => {
  return grabUsernameFromDb(req.query.id)
    .then(userObj => {
      res.send(userObj);
    })
    .catch(err => {
      console.error('from server side, err');
    });
});

app.post('/newuser', (req, res) => {
  return createUserRecord(req.query)
    .then(dataObj => {
      res.send(dataObj);
    })
    .catch(err => {
      console.error('from server side, err');
    });
});

app.patch('/updateuser', (req, res) => {
  return updateUsernameFromDb(req.query.id)
    .then(userObj => {
      res.send(userObj);
    })
    .catch(err => {
      console.error('from server side, err');
    });
});

app.delete('/deleteuser', (req, res) => {
  return deleteUsernameFromDb(req.query.id)
    .then(userObj => {
      res.send(userObj);
    })
    .catch(err => {
      console.error('from server side, err');
    });
});

// update

app.listen(port, console.log('listening on port ' + port));