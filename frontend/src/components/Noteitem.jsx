import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { note, updateNote } = props;

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-2">
          <h5 className="text-lg font-semibold text-gray-800">{note.title}</h5>
          <div className="flex space-x-2 text-gray-600">
            <i
              className="fa-solid fa-trash cursor-pointer hover:text-red-500 transition"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted Successfully!", "success");
              }}
            ></i>
            <i
              className="fa-regular fa-pen-to-square cursor-pointer hover:text-blue-500 transition"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
        </div>
        <p className="text-gray-700">{note.description}</p>
      </div>
    </div>
  );
};

export default Noteitem;
