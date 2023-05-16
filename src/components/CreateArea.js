import React, { useState } from "react";
import axios from "axios";

function CreateArea(props) {
  const url = `${process.env.REACT_APP_API_URL}`;
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const submitNote = (event) => {
    event.preventDefault();

    if (note.title && note.content) {
      axios
        .post(`${url}/addNew`, note)
        .then(() => {
          props.onAdd(note);
          setNote({
            title: "",
            content: "",
          });
        })
        .catch((error) => console.log(error));
    }
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            className="titleinput"
            onChange={handleChange}
            name="title"
            autoComplete="off"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />
        {isExpanded ? (
          <button onClick={submitNote}>
            <i class="fa-solid fa-square-plus fa-2xl icon"></i>
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
