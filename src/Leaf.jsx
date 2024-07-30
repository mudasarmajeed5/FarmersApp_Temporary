import React from 'react'
import Footer from './assets/Footer'
const Leaf = () => {
  return (<>
    <img src="https://w0.peakpx.com/wallpaper/374/819/HD-wallpaper-green-field-sunset-clouds-countryside-farming-agriculture-landscape.jpg" className='absolute z-[-10] w-screen h-screen object-cover object-center' alt="" />
    <div className="relative min-h-screen flex text-white flex-col items-center justify-center">
    <h1 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-6">
      Agriculture Calculator
    </h1>
    <div className="p-8 border bg-transparent backdrop-filter backdrop-blur-sm rounded-lg shadow-lg w-[90%] max-w-md">
      <label htmlFor="file">Upload Image</label>
      <input type="file" />
      <label
        htmlFor="temperature"
        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
        Temperature
      </label>
      <input
        type="number"
        id="temperature"
        name="temperature"
        className="mt-1 block w-full p-2 border border-zinc-300 rounded-md focus:ring focus:ring-green-500 bg-transparent"
        placeholder="Enter temperature"
        required=""
        />
      <label
        htmlFor="humidity"
        className="block mt-4 text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
        Humidity
      </label>
      <input
        type="number"
        id="humidity"
        name="humidity"
        className="mt-1 block w-full p-2 border border-zinc-300 rounded-md focus:ring focus:ring-green-500 bg-transparent"
        placeholder="Enter humidity"
        required=""
        />
      <label
        htmlFor="rainfall"
        className="block mt-4 text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
        Rainfall
      </label>
      <input
        type="number"
        id="rainfall"
        name="rainfall"
        className="mt-1 block w-full p-2 border border-zinc-300 rounded-md focus:ring focus:ring-green-500 bg-transparent"
        placeholder="Enter rainfall"
        required=""
      />
      <label
        htmlFor="crop"
        className="block mt-4 text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
        Crop
      </label>
      <input
        type="text"
        id="crop"
        name="crop"
        className="mt-1 block w-full p-2 border border-zinc-300 rounded-md focus:ring focus:ring-green-500 bg-transparent"
        placeholder="Enter crop"
        required=""
        />
      <button
        id="calculate-btn"
        className="bg-green-500 text-white mt-6 py-2 px-4 rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
        >
        Calculate
      </button>
      <div
        id="output"
        className="mt-6 text-lg font-semibold text-green-700 dark:text-green-300 hidden"
        >
        Output: <span id="output-value" />
      </div>
      <a href='/' className="mx-2 bg-accent text-accent-foreground mt-6 py-2 px-4 rounded-lg hover:bg-accent/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent text-black bg-white">
        Go to Home
      </a>
    </div>
  </div>
  <Footer/>
   </>
  )
}

export default Leaf