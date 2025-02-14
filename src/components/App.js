import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createEntry(noteTerm) {
  return (
    <Note
      key={noteTerm.key}
      title={noteTerm.title}
      content={noteTerm.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <dl className="notes1">{notes.map(createEntry)}</dl>
      <Note />
      <Footer />
    </div>
  );
}

export default App;
