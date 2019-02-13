const MongoClient = require('mongodb').MongoClient;
const faker = require('faker');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, {useNewUrlParser: true});
const dbName = 'twitchchat';
const usersCollection = 'users';

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
    result.push({
      insertOne: {
        'document' : {
          '_id': i,
          'user_id': i,
          'USERNAME': faker.internet.userName(),
          'TWITCH_SUB':`${randomBoolean()}`,
          'MOD_STATUS':`${randomModBoolean()}`,
          'COLOR':`${colors[generateRandomNumber(colors.length - 1)]}`
        }
      }
    });
    start ++;
  }
  return result;
};

module.exports = () => {
  client.connect(function(err) {
    if (err) {
      console.log('err:', err);
    }
    const db = client.db(dbName);
    const users = db.collection(usersCollection);
    console.log('db connected');
    users.bulkWrite(createUserData(1, 1000001))
      .then((data) => {
        console.log('1M records written');
        return users.bulkWrite(createUserData(1000001, 2000001));
      })
      .then((data) => {
        console.log('2M records written');
        return users.bulkWrite(createUserData(2000001, 3000001));
      })
      .then((data) => {
        console.log('3M records written');
        return users.bulkWrite(createUserData(3000001, 4000001));
      })
      .then((data) => {
        console.log('4M records written');
        return users.bulkWrite(createUserData(4000001, 5000001));
      })
      .then((data) => {
        console.log('5M records written');
        return users.bulkWrite(createUserData(5000001, 6000001));
      })
      .then((data) => {
        console.log('6M records written');
        return users.bulkWrite(createUserData(6000001, 7000001));
      })
      .then((data) => {
        console.log('7M records written');
        return users.bulkWrite(createUserData(7000001, 8000001));
      })
      .then((data) => {
        console.log('8M records written');
        return users.bulkWrite(createUserData(8000001, 9000001));
      })
      .then((data) => {
        console.log('9M records written');
        return users.bulkWrite(createUserData(9000001, 10000001));
      })
      .then((data) => {
        console.log('10M records written');
        console.log('DB Insert Completed');
      });
  });
};

require('make-runnable/custom')({
  printOutputFrame: false
});