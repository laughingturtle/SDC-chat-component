var db = require('./db');
const faker = require('faker');

var dataSql = 'INSERT INTO users (USERNAME, TWITCH_SUB, MOD_STATUS, COLOR) VALUES ($1, $2, $3, $4)';

const colors = ['goldenrod', 'dodgerblue', 'red', 'chocolate', 'coral', 'orangered', 'seagreen', 'cadetblue', 'hotpink', 'blueviolet', 'springgreen', 'yellowgreen', 'firebrick'];

randomBoolean = function() {
  const output = Math.random();
  return output >= 0.5;
};

randomModBoolean = function() {
  const output = Math.random();
  return output >= 0.9;
};

generateRandomNumber = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

let createUserData = (start, end) => {
  let result = [];
  for (let i = start; i < end; i ++) {
    result.push([faker.internet.userName(), `${randomBoolean()}`, `${randomModBoolean()}`, `${colors[generateRandomNumber(colors.length - 1)]}`]);
    start ++;
  }
  return result;
};


module.exports = () => {
  db.connection.query(dataSql, createUserData(1, 1000001))
    .then((data) => {
      console.log('1M records written');
      return db.connection.query(dataSql, createUserData(1000001, 2000001));
    })
    .then((data) => {
      console.log('2M records written');
      return db.connection.query(dataSql, createUserData(2000001, 3000001));
    })
    .then((data) => {
      console.log('3M records written');
      return db.connection.query(dataSql, createUserData(3000001, 4000001));
    })
    .then((data) => {
      console.log('4M records written');
      return db.connection.query(dataSql, createUserData(4000001, 5000001));
    })
    .then((data) => {
      console.log('5M records written');
      return db.connection.query(dataSql, createUserData(5000001, 6000001));
    })
    .then((data) => {
      console.log('6M records written');
      return db.connection.query(dataSql, createUserData(6000001, 7000001));
    })
    .then((data) => {
      console.log('7M records written');
      return db.connection.query(dataSql, createUserData(7000001, 8000001));
    })
    .then((data) => {
      console.log('8M records written');
      return db.connection.query(dataSql, createUserData(8000001, 9000001));
    })
    .then((data) => {
      console.log('9M records written');
      return db.connection.query(dataSql, createUserData(9000001, 10000001));
    })
    .then((data) => {
      console.log('10M records written');
      console.log('DB Insert Completed');
    })
    .catch((error) => {
      console.log('error', error);
    });
};

require('make-runnable/custom')({
  printOutputFrame: false
});