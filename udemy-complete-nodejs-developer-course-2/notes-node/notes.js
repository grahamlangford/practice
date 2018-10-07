const fs = require("fs");

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes-data.json"));
  } catch (e) {
    console.error(e);
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
  const note = {
    title,
    body
  };
  const notes = fetchNotes();

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  return fetchNotes();
};

const getNote = title => {
  return fetchNotes().filter(note => note.title === title)[0];
};

const removeNote = title => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

const logNote = note => {
  return `
      Note:
          Title: ${note.title}
          Body:  ${note.body}   
      `;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
