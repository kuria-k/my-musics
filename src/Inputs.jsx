import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Inputs({ setEntries }) {
  const [name, setName] = useState("");
  const [music, setMusic] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries((prev) => [...prev, {name,music, artist, genre }]);
    navigate("/data");
  };

  return (
    <>
      <form
        action=""
        className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-gray-100 w-380 h-180 text-center"
        onSubmit={handleSubmit}
      >
        {" "}
        <br />
        <br />
        <br /> <br />
        <div className="flex items-center justify-center mb-4">
          <div className="music-note text-6xl mr-4">🎵</div>
          <h1 className="text-4xl font-bold text-white">Daily Music Tracker</h1>
          <div className="music-note text-6xl ml-4">🎶</div>
        </div>{" "}
        <br />
        <br />
        <input
          type="text"
          value={name}
          placeholder="Listenser name"
          className="text-center border border-gray-100 p-2 w-74 rounded-2xl"
          required
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <input
          type="text"
          value={music}
          placeholder="Music name"
          className="text-center border border-gray-100 p-2 w-74 rounded-2xl"
          required
          onChange={(e) => setMusic(e.target.value)}
        />{" "}
        <input
          type="text"
          value={artist}
          placeholder="Artist"
          className="text-center border border-gray-100 p-2 w-74 rounded-2xl"
          required
          onChange={(e) => setArtist(e.target.value)}
        />{" "}
        <br />
        <br /> <br />
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="text-center border border-gray-100 p-2 w-144 rounded-2xl"
        >
          <option value="" className="text-gray-900">
            Select Genre
          </option>
          <option value="Rock" className="text-gray-900">
            Rock
          </option>
          <option value="Pop" className="text-gray-900">
            Pop
          </option>
          <option value="Jazz" className="text-gray-900">
            Jazz
          </option>
          <option value="Hip-Hop" className="text-gray-900">
            Hip-Hop
          </option>
          <option value="Classical" className="text-gray-900">
            Classical
          </option>
        </select>
        <br />
        <br />
        <br /> <br />
        <button className="bg-gray-100 text-stone-800">
          {" "}
          <span className="text-gray-900">+</span> Add music
        </button>
      </form>
    </>
  );
}

export default Inputs;
