const io = require("../utils/io");
const chalk = require("chalk");
module.exports.command = "read";
module.exports.describe = "Reads a note";
module.exports.builder = (yargs) => {
  yargs.option("title", {
    describe: "Title of the note",
    type: "string",
    demandOption: true,
  });
};
module.exports.handler = (argv) => {
  const notes = io.getNotes();

  const foundNote = notes.find((note) => note.title === argv.title);

  if (foundNote) {
    console.log(chalk.blue("=== " + foundNote.title + " ==="));
    console.log(foundNote.body);
    console.log(chalk.blue("==================="));
  } else {
    console.log(chalk.red("[ERROR] ") + "Note with that title does not exist");
  }
};