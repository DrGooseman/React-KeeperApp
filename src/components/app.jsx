import React from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import notes from "./../notes";

function App() {
  return (
    <div>
      <Header></Header>
      {notes.map(note => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
