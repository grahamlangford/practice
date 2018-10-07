const yargs = require("yargs");

const notes = require("./notes");

const titleOptions = { describe: "Title of note", demand: true, alias: "t" };
const bodyOptions = { describe: "Body of note", demand: true, alias: "b" };

const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "List all notes")
  .command("read", "Read a note", { title: titleOptions })
  .command("remove", "Remove a note", { title: titleOptions })
  .help().argv;
const command = argv._[0];

switch (command) {
  case "add":
    const addNote = notes.addNote(argv.title, argv.body);
    console.log(addNote ? notes.logNote(addNote) : "Note Title Already Exists");
    break;
  case "list":
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => console.log(notes.logNote(note)));
    break;
  case "read":
    const fetchNote = notes.getNote(argv.title);
    console.log(fetchNote ? notes.logNote(fetchNote) : "Note Not Found");
    break;
  case "remove":
    const success = notes.removeNote(argv.title);
    console.log(success ? "Note removed" : "Note not found");
    break;
  default:
    console.log("Command Not Found");
}
