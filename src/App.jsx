import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Inputs from "./Inputs";
import Data from "./Data";
import "./App.css";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setEntries={setEntries} />} />
        <Route path="/inputs" element={<Inputs entries={entries} setEntries={setEntries} />} />
        <Route path="/data" element={<Data entries={entries} />} />
      </Routes>
    </Router>
  );
}

export default App;
