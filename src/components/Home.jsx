import React from 'react';

function Home() {
  return (
    <div className="p-8">
      <h2 className="text-3xl mb-4">Introduction to Cryptography (Classic & Modern)</h2>
      <p>
        Cryptography is the science of securing communication and data through encryption. This includes both 
        classic cryptography methods, such as the Caesar Cipher and Block Cipher, and modern methods, such as 
        symmetric and asymmetric encryption.
      </p>
      <p className="mt-4">
        Classic cryptography mainly focuses on simple methods of substitution and transposition, while modern cryptography
        employs advanced mathematical algorithms to ensure data confidentiality, integrity, and authenticity. Explore this
        website to learn more about different cryptographic methods and how they work!
      </p>
    </div>
  );
}

export default Home;
