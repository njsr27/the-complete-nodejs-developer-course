const chalk = require("chalk");
const io = require("../utils/io");

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
  const notes = io.getNotes();

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].title === argv.title) {
      console.log(
        chalk.red("[ERROR] ") + "Note with that title already exists"
      );
      return;
    }
  }

  notes.push({
    title: argv.title,
    body: argv.body,
  });

  console.log(
    chalk.green("[INFO] ") +
      "Added note with title: " +
      chalk.magenta(argv.title) +
      " and body: " +
      chalk.magenta(argv.body)
  );
  io.saveNotes(notes);
};