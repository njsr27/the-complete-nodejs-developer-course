const fs = require("fs");
const fileConstants = require("../constants/fileConstants");

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync(fileConstants.NOTES_FILE_PATH, dataJson);
};

const getNotes = function () {
  if (!fs.existsSync(fileConstants.NOTES_FILE_PATH)) {
    return [];
  } else {
    const dataBuffer = fs.readFileSync(fileConstants.NOTES_FILE_PATH);
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  }
};

module.exports = {
  saveNotes: saveNotes,
  getNotes: getNotes,
};