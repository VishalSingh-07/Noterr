import React from "react";

function Note(props) {
  const handleClick = () => {
    props.onDelete(props.title);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="deletebutton" onClick={handleClick}>
        <i class="fa-solid fa-trash-can fa-xl icon"></i>
      </button>
    </div>
  );
}

export default Note;
