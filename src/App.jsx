import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Classical from './components/Classical';
import Modern from './components/Modern';
import Cryptanalysis from './components/Cryptanalysis';
import SecurityGoals from './components/SecurityGoals';
import EncryptDecrypt from './components/EncryptDecrypt';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-500 text-white py-4">
          <h1 className="text-4xl text-center">Cryptography (Classic & Modern)</h1>
        </header>
        <nav className="flex justify-center my-4">
          <a className="mx-4 text-blue-700" href="/">Introduction</a>
          <a className="mx-4 text-blue-700" href="/classical">Classical Encryption</a>
          <a className="mx-4 text-blue-700" href="/modern">Modern Encryption</a>
          <a className="mx-4 text-blue-700" href="/cryptanalysis">Cryptanalysis</a>
          <a className="mx-4 text-blue-700" href="/security-goals">Security Goals</a>
          <a className="mx-4 text-blue-700" href="/encrypt-decrypt">Encrypt/Decrypt</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classical" element={<Classical />} />
          <Route path="/modern" element={<Modern />} />
          <Route path="/cryptanalysis" element={<Cryptanalysis />} />
          <Route path="/security-goals" element={<SecurityGoals />} />
          <Route path="/encrypt-decrypt" element={<EncryptDecrypt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
