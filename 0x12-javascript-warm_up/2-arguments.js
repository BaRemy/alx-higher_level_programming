#!/usr/bin/node
const { argv } = require('node:process');
const argLen = process.argv.length - 2;
console.log(argLen === 0 ? 'No argument' : argLen === 1 ? 'Argument found' : 'Arguments found');
