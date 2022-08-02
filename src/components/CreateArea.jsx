import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

  const [isZoomedIn, setZoom] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleZoom(){
    setZoom(true);
  };

  return (
    <div>
      <form className="create-note">
      {isZoomedIn && (
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
      )}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isZoomedIn ? 3 : 1}
          onClick={handleZoom}
        />
      <Zoom in={isZoomedIn}>
      <button onClick={submitNote}><AddIcon /></button>
      </Zoom>
      {/* Alternatively */}
      {/* {isZoomedIn && (<button onClick={submitNote}><AddIcon /></button>)} */}
      </form>
    </div>
  );
}

export default CreateArea;
