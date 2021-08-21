const chalk = require("chalk");

module.exports.command = "add";
module.exports.describe = "Adds a note";
module.exports.builder = (yargs) => {
  yargs
    .option("title", {
      describe: "Title of the note",
      type: "string",
      demandOption: true,
    })
    .option("body", {
      describe: "Body of the note",
      type: "string",
      demandOption: true,
    });
};
module.exports.handler = (argv) => {
  console.log(
    chalk.green("[INFO] ") +
      "Adding note with title: " +
      chalk.magenta(argv.title) +
      " and body: " +
      chalk.magenta(argv.body)
  );
};
