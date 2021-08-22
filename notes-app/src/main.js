"use strict";

const yargs = require("yargs");

yargs
  .command(require("./app/commands/add"))
  .command(require("./app/commands/remove"))
  .command(require("./app/commands/read"))
  .command(require("./app/commands/list"))
  .parse();