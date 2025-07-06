import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, []);

  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
    setIsModalOpen(true);
  };

  const handleClick = () => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    setIsModalOpen(false);
    props.showAlert("Update Successfully!", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <h2 className="text-xl font-bold mb-4">Edit Note</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="etitle" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="etitle"
                  name="etitle"
                  value={note.etitle}
                  onChange={onChange}
                  minLength={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="edescription" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="edescription"
                  name="edescription"
                  value={note.edescription}
                  onChange={onChange}
                  rows="2"
                  minLength={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <label htmlFor="etag" className="block text-sm font-medium text-gray-700">
                  Tag
                </label>
                <textarea
                  id="etag"
                  name="etag"
                  value={note.etag}
                  onChange={onChange}
                  rows="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </form>
            <div className="mt-6 flex justify-end space-x-2 gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-3 "
              >
                Close
              </button>
              <button
                onClick={handleClick}
                disabled={note.etitle.length < 5 || note.edescription.length < 5}
                className={`px-4 py-2 rounded-3 text-white ${
                  note.etitle.length < 5 || note.edescription.length < 5
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="my-8 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Notes</h2>
        {notes.length === 0 ? (
          <p className="text-gray-500">No notes to display</p>
        ) : (
          <div className="flex flex-wrap -mx-2">
            {notes.map((note) => (
              <Noteitem
                key={note._id}
                updateNote={updateNote}
                showAlert={props.showAlert}
                note={note}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Notes;
