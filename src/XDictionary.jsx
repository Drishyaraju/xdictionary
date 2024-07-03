import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const XDictionary = () => {
    const [dictionary] = useState([
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            setResult("Please enter a search term.");
            return;
        }

        const foundWord = dictionary.find(entry => entry.word.toLowerCase() === searchTerm.toLowerCase());
        if (foundWord) {
            setResult(foundWord.meaning);
        } else {
            setResult("Word not found in the dictionary.");
        }
    };

    return (
        <div className='dictionary'>
            <h1>Dictionary App</h1>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Search for a word..." 
            />
            <button onClick={handleSearch}>Search</button>
            <p><span className="definition">Definition:</span><br /><br />{result}</p>
        </div>
    );
};

export default XDictionary;
