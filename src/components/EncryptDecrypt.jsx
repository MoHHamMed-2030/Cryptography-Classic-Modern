import React, { useState } from 'react';

// Caesar Cipher function
function caesarCipher(text, shift, encrypt = true) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return text.toUpperCase().split('').map(char => {
    const idx = alphabet.indexOf(char);
    if (idx === -1) return char;  // Non-alphabet character
    let newIdx = encrypt ? (idx + shift) % 26 : (idx - shift + 26) % 26;
    return alphabet[newIdx];
  }).join('');
}

// Simple Block Cipher (for demonstration purposes, reversing the string)
function blockCipher(text, encrypt = true) {
  return encrypt ? text.split('').reverse().join('') : text.split('').reverse().join('');
}

function EncryptDecrypt() {
  const [message, setMessage] = useState('');
  const [method, setMethod] = useState('caesar');
  const [shift, setShift] = useState(3); // Used for Caesar Cipher
  const [result, setResult] = useState('');

  // Encrypt function
  const handleEncrypt = () => {
    if (method === 'caesar') {
      setResult(caesarCipher(message, shift));
    } else if (method === 'block') {
      setResult(blockCipher(message));
    }
    // Add more encryption methods here
  };

  // Decrypt function
  const handleDecrypt = () => {
    if (method === 'caesar') {
      setResult(caesarCipher(message, shift, false));
    } else if (method === 'block') {
      setResult(blockCipher(message, false));
    }
    // Add more decryption methods here
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-4">Encrypt/Decrypt</h2>
      
      <textarea
        className="border p-2 w-full mb-4"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      
      <div className="mb-4">
        <label className="mr-4">Select method:</label>
        <select value={method} onChange={(e) => setMethod(e.target.value)} className="border p-2">
          <option value="caesar">Caesar Cipher</option>
          <option value="block">Block Cipher</option>
          {/* Add other encryption methods */}
        </select>
      </div>
      
      {method === 'caesar' && (
        <div className="mb-4">
          <label className="mr-4">Shift (for Caesar Cipher):</label>
          <input
            type="number"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            className="border p-2"
          />
        </div>
      )}
      
      <button onClick={handleEncrypt} className="bg-green-500 text-white px-4 py-2 mr-4">
        Encrypt
      </button>
      <button onClick={handleDecrypt} className="bg-red-500 text-white px-4 py-2">
        Decrypt
      </button>

      {result && (
        <div className="mt-4 p-4 border bg-gray-200">
          <strong>Result:</strong>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default EncryptDecrypt;
