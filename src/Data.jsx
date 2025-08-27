import React from "react";
import { useNavigate } from "react-router-dom";

function Data({ entries }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleDelete = (Delete) => {
    const updatedEntries = entryList.filter(
      (_, index) => index !== Delete
    );
    setEntryList(updatedEntries);
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-gray-100 w-380 h-180 text-center"><br />
      <button onClick={handleSubmit} className="text-gray-100 -ml-330">
        Back
      </button>
      <div className="mt-15 uppercase text-3xl">
        🎵Your <span className="text-indigo-500 text-5xl italic">Album</span> is
        made up of
      </div>
      <br />

      <table className="w-full">
        <thead>
          <tr className="text-center">
            <th className="border">Listener</th>
            <th className="border text-center">Music</th>
            <th className="border text-center">Artist</th>
            <th className="border text-center">Genre</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="border font-bold text-xl uppercase text-indigo-300">
                {entry.name}
              </td>
              <td className="border text-center">{entry.music}</td>
              <td className="border text-center">{entry.artist}</td>
              <td className="border">{entry.genre}</td>
              <td className="border">
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-gray-100 px-2  rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
