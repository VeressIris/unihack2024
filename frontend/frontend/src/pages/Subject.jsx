

import React, { useState, useEffect } from 'react';
import Nav from '../assets/components/nav';

const Subject = () => {
  const [generatedSubject, setGeneratedSubject] = useState('');

  useEffect(() => {
    // Simulate AI generating the subject
    const subject = 'Subiect generat de AI despre biologie și anatomia umană...';
    setGeneratedSubject(subject);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#419BD0] to-[#4556C5] text-white">
      <Nav />
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
        <h2 className="text-nsw text-2xl font-medium mb-4">
          Subiectul tău este gata!
        </h2>

        {/* Display generated subject in a styled container */}
        <div className="bg-dbnsw text-black p-4 rounded-md shadow-md w-full max-w-lg text-left">
          <p className="whitespace-pre-wrap">{generatedSubject || 'Se generează subiectul...'}</p>
        </div>

        {/* Optional textarea if you want the subject to be editable */}
        {/* 
        <textarea
          className="bg-white text-black p-4 rounded-md shadow-md w-full max-w-lg"
          rows="10"
          value={generatedSubject}
          readOnly
        />
        */}
      </div>
    </div>
  );
};

export default Subject;
