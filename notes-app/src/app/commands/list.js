const io = require("../utils/io");
const chalk = require("chalk");
module.exports.command = "list";
module.exports.describe = "Lists the notes";
module.exports.builder = {};
module.exports.handler = () => {
  const notes = io.getNotes();
  console.log(chalk.blue("=== Your notes ==="));
  notes.forEach((note) => console.log(note.title));
  console.log(chalk.blue("=================="));
};