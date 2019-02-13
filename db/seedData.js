/* eslint-disable func-style */
var db = require('./db');
var faker = require('faker');

const colors = ['goldenrod', 'dodgerblue', 'red', 'chocolate', 'coral', 'orangered', 'seagreen', 'cadetblue', 'hotpink', 'blueviolet', 'springgreen', 'yellowgreen', 'firebrick'];

// function sampleUsers() {
function randomBoolean() {
  const output = Math.random();
  return output >= 0.5;
}

function randomModBoolean() {
  const output = Math.random();
  return output >= 0.9;
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var dataSql = 'INSERT INTO users (USERNAME, TWITCH_SUB, MOD_STATUS, COLOR) VALUES ($1, $2, $3, $4)';

//INSERT INTO users (USERNAME, TWITCH_SUB, MOD_STATUS, COLOR) VALUES ('zoot4',True,False,'coral');

function seed() {
  var temp = [];
  for (g = 0; g < 1000; g++) {
    for (i = 0; i < 10000; i++) {
      var data = [faker.internet.userName(), `${randomBoolean()}`, `${randomModBoolean()}`, `${colors[generateRandomNumber(colors.length - 1)]}`];
      temp.push(data);
    }
    for (j = 0; j < 10000; j++) {
      db.connection.query(dataSql, temp[j])
        .then( ()=> {
          console.log(i, ' database song seeding successful');
        })
        .catch(error => {
          console.log('Oh darn, you have a database seeding problem', error);
          throw error;
        });
    }
    temp = [];
  }
  console.log(i, ' database song seeding ENDED');
}


seed();
// }
//module.exports = sampleUsers;
