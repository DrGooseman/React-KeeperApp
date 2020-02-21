import React, { useState } from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import startingNotes from "./../notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState(startingNotes);

  function addNote(note) {
    const newNote = { key: notes.length + 1, ...note };
    setNotes([...notes, newNote]);
  }

  function deleteNote(index) {
    const newNotes = notes.filter(note => note.key !== index);
    setNotes(newNotes);
  }

  return (
    <div>
      <Header></Header>
      <CreateArea handleCreateArea={addNote} />
      {notes.map(note => (
        <Note
          key={note.key}
          index={note.key}
          title={note.title}
          content={note.content}
          handleClick={deleteNote}
        />
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
