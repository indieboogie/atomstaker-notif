const atomstaker_notif = require('atomstaker-notif');
const atomstaker_autojob = require('atomstaker-autojob');
const sinon = require('sinon');
const bluebird = require('bluebird');
const validator = require('validator');
const chalk = require('chalk');
const jquery = require('jquery');
const fs_extra = require('fs-extra');
const moment = require('moment');
const commander = require('commander');
const helmet = require('helmet');
const mongoose = require('mongoose');
const supertest = require('supertest');
const react = require('react');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your age? ', answer => {
  console.log(`You are ${answer} years old`);
  rl.close();
});

const { Writable } = require('stream');
const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});
process.stdin.pipe(outStream);

const dns = require('dns');
dns.lookup('example.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});