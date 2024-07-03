import React, { useState } from "react";
import './App.css'

const Dict = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

export default function XDictionary() {
  const [display, setDisplay] = useState("");
  const [definition, setDefinition] = useState("");
  const [search, setSearch] = useState(false);

  function handleChange(e) {
    setSearch(false);
    let type = e.target.value;
    setDisplay(type);
  }

  function handleClick() {
    if (display.trim() === "") {
      setDefinition("Word not found in the dictionary.");
    } else {
      let result = Dict.find(item => display.toLowerCase() === item.word.toLowerCase());
      if (result) {
        setDefinition(result.meaning);
      } else {
        setDefinition("Word not found in the dictionary.");
      }
    }
    setSearch(true);
  }

  return (
    <div className="dictionary">
      <h2>Dictionary App</h2>
      <input
        type="text"
        value={display}
        onChange={handleChange}
        placeholder="Search for a word.."
      />
      <button onClick={handleClick}>Search</button>
      <br />
      <p className="definition">Definition:</p>
      {search && <p>{definition}</p>}
    </div>
  );
}