import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Navbar from "./Navbar";
import axios from "axios";

function Main() {
  const url = `${process.env.REACT_APP_API_URL}`;
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    axios
      .get(`${url}/getAll`)
      .then((response) => setNotes(response.data))
      .catch((error) => console.log(error));
  };
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  const deleteNote = (title) => {
    axios
      .post(`${url}/delete`, { title })
      .then(() => fetchNotes())
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar />
      <CreateArea onAdd={addNote} />

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default Main;
