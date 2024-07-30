// src/ImageUpload.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImageUpload = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/leaf');
  };

  return (
    <div className="flex flex-col justify-center items-center bg-green-50 min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-green-700 mb-8">Upload the Image</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <input
          type="file"
          accept="image/*"
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          aria-describedby="file_input_help"
        />
        <button
          onClick={handleStartClick}
          className="mt-4 w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 focus:outline-none"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
