/* eslint-disable func-style */
var db = require('./db');
var faker = require('faker');
var fs = require('fs');
var writeStream = fs.createWriteStream('data.csv', {
  flags: 'w'
});
writeStream.write('USERNAME, TWITCH_SUB, MOD_STATUS, COLOR');

const colors = ['goldenrod', 'dodgerblue', 'red', 'chocolate', 'coral', 'orangered', 'seagreen', 'cadetblue', 'hotpink', 'blueviolet', 'springgreen', 'yellowgreen', 'firebrick'];

writeStream.on('drain', function() {
  seed();
});

//const data = seed(10);

function objectValues(obj) {
  let vals = [];
  for (const prop in obj) {
    vals.push(obj[prop]);
  }
  return vals;
}

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

//var dataSql = 'INSERT INTO users (USERNAME, TWITCH_SUB, MOD_STATUS, COLOR) VALUES ($1, $2, $3, $4)';
//INSERT INTO users (USERNAME, TWITCH_SUB, MOD_STATUS, COLOR) VALUES ('zoot4',True,False,'coral');

function seed() {
  for (i = 0; i < 10000000; i++) {
    var row = {USERNAME: faker.internet.userName(), TWITCH_SUB:`${randomBoolean()}`, MOD_STATUS:`${randomModBoolean()}`, COLOR:`${colors[generateRandomNumber(colors.length - 1)]}`};
    console.log(row);
    console.log(JSON.stringify(objectValues(row)));
    var data = JSON.stringify(objectValues(row)).substring(1);
    data = data.substring(0, data.length - 1);
    writeStream.write(data + '\n');
    console.log(i, ' database song seeding ENDED');
  }
  writeStream.end();
}

seed();
//csvWriter.writeRecords(data).then(() => console.log('data written to csv'));