import React from 'react'
import Footer from './assets/Footer'

const Info = () => {
  return (
    <>
    <div className="bg-green-100 min-h-screen p-5">
      <h1 className="text-green-800 text-3xl font-bold mb-4 text-center">Common Plant Diseases and Treatments</h1>
      <div className="text-green-700 text-lg">
        <div className="mb-4">
          <h2 className="text-green-900 font-semibold">1. Powdery Mildew</h2>
          <p>Symptoms: <span className=" font-semibold"> White powdery spots on leaves.</span></p>
          <p>Treatment: Use fungicides or homemade sprays (like baking soda and water).</p>
        </div>
        <div className="mb-4">
          <h2 className="text-green-900 font-semibold">2. Root Rot</h2>
          <p>Symptoms: <span className=" font-semibold"> Yellowing leaves, stunted growth.</span></p>
          <p>Treatment: Improve drainage, reduce watering, use fungicide.</p>
        </div>
        <div className="mb-4">
          <h2 className="text-green-900 font-semibold">3. Leaf Spot</h2>
          <p>Symptoms: <span className=" font-semibold"> Brown or black spots on leaves.</span></p>
          <p>Treatment: Remove affected leaves, apply fungicide.</p>
        </div>
        <div className="mb-4">
          <h2 className="text-green-900 font-semibold">4. Blight</h2>
          <p>Symptoms: <span className=" font-semibold"> Sudden wilting, browning of leaves and stems.</span></p>
          <p>Treatment: Prune affected areas, use copper-based fungicide.</p>
        </div>
        <div className="mb-4">
          <h2 className="text-green-900 font-semibold">5. Aphids</h2>
          <p>Symptoms: <span className=" font-semibold"> Sticky residue, curled leaves.</span></p>
          <p>Treatment: Introduce natural predators, use insecticidal soap.</p>
        </div>
        <div className="mb-4">
          <h2 className="text-green-900 font-semibold">6. Rust</h2>
          <p>Symptoms: <span className=" font-semibold"> Orange or yellow spots on leaves.</span></p>
          <p>Treatment: Remove affected leaves, apply sulfur-based fungicide.</p>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-green-600">Remember, prevention is key! Keep your plants healthy and well-maintained.</p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Info