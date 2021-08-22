const path = require("path");

const NOTES_FILE = "notes.json";
const NOTES_FILE_PATH = path.resolve(__dirname, "../resource/" + NOTES_FILE);

module.exports = {
  NOTES_FILE: NOTES_FILE,
  NOTES_FILE_PATH: NOTES_FILE_PATH,
};