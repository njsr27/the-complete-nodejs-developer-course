const chalk = require("chalk");
const io = require("../utils/io");

module.exports.command = "remove";
module.exports.describe = "Removes a note";
module.exports.builder = (yargs) => {
  yargs.option("title", {
    describe: "Title of the note",
    type: "string",
    demandOption: true,
  });
};
module.exports.handler = (argv) => {
  const notes = io.getNotes();

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].title === argv.title) {
      console.log(
        chalk.green("[INFO] ") +
          "Removed note with title: " +
          chalk.magenta(argv.title)
      );
      notes.splice(i, 1);
      io.saveNotes(notes);
      return;
    }
  }

  console.log(chalk.red("[ERROR] ") + "Note with that title does not exist");
};