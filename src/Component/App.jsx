import React, { useState } from 'react';
import './App.css';
import { FaCopy } from 'react-icons/fa';

function App() {
  const [length, setLength] = useState(12);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let charset = '';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%&(){}[]';

    if (includeUpperCase) charset += upper;
    if (includeLowerCase) charset += lower;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    if (charset === '') {
      alert('Please select at least one option');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyTOClickboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');
  };

  return (
    <div className='app'>
      <h1>Password Generator</h1>
      <div className='output-box'>
        <input type="text" value={password} readOnly />
        <button onClick={copyTOClickboard}><FaCopy /></button>
      </div>

      <div className='controls'>
        <label>
          Length: {length}
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeUpperCase}
            onChange={() => setIncludeUpperCase(!includeUpperCase)}
          />
          Include Uppercase Letters
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeLowerCase}
            onChange={() => setIncludeLowerCase(!includeLowerCase)}
          />
          Include Lowercase Letters
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>

        <button className='generate-btn' onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
