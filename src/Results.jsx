// src/Results.jsx
import React from 'react';
import Footer from './assets/Footer';
const Results = () => {
  // Dummy data for demonstration
  const results = {
    diseaseName: 'Blight',
    description: 'A common disease affecting various crops, causing leaf damage and reduced yield.',
    cures: [
      'Use fungicides containing copper or chlorothalonil.',
      'Remove and destroy affected leaves and plants.',
      'Ensure proper crop rotation to prevent disease buildup.',
    ],
  };

  return (<>
       <div className="flex flex-col items-center bg-green-50 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-8">Disease Diagnosis Results</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">{results.diseaseName}</h2>
        <p className="text-gray-700 mb-6">{results.description}</p>
        <h3 className="text-xl font-medium text-green-600 mb-3">Suggested Cures:</h3>
        <ul className="list-disc list-inside space-y-2">
          {results.cures.map((cure, index) => (
            <li key={index} className="text-gray-800">{cure}</li>
          ))}
        </ul>
      </div>
    </div>
  <Footer />
  </>

  );
};

export default Results;
