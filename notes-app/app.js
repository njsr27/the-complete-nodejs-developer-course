"use strict";

//const chalk = require('chalk')
//const notes = require('./app/notes')
const yargs = require("yargs");

yargs
  .command(require("./app/commands/add"))
  .command(require("./app/commands/remove"))
  .command(require("./app/commands/read"))
  .command(require("./app/commands/list"))
  .parse();