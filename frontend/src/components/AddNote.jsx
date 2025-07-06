import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert(" Added Successfully!", "success ");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="my-6 max-w-xl mx-auto bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Add a Note</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
            minLength={5}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="2"
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="tag" className="block mb-1 text-sm font-medium text-gray-700">
            Tag
          </label>
          <textarea
            id="tag"
            name="tag"
            rows="1"
            value={note.tag}
            onChange={onChange}
            minLength={5}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          onClick={handleClick}
          disabled={note.title.length < 5 || note.description.length < 5}
          className={`w-full py-2 px-4 rounded-md font-semibold text-white ${
            note.title.length < 5 || note.description.length < 5
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } transition`}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
