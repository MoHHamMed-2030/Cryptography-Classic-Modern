import React from 'react';

function Classical() {
  return (
    <div className="p-8">
      <h2 className="text-3xl mb-4">Classical Cryptography</h2>
      <p><strong>Caesar Cipher</strong>: A substitution cipher where each letter in the plaintext is shifted by a certain number of places.</p>
      <p><strong>Stream Cipher</strong>: Encrypts data one bit at a time using a key stream.</p>
      <p><strong>Block Cipher</strong>: Encrypts data in fixed-size blocks using techniques like ECB and CBC.</p>
    </div>
  );
}

export default Classical;
