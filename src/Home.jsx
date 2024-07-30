import React, { useState, useEffect } from 'react';
import './App.css';
import "./index.css"
import { FaSun, FaCloudSun, FaCloud, FaCloudShowersHeavy, FaCloudRain, FaCloudSunRain, FaCloudMeatball, FaLeaf } from 'react-icons/fa';
import Preloader from "./Preloader"
import Footer from "./assets/Footer"
import { FaCanadianMapleLeaf } from "react-icons/fa";
const Home = ()=>{ {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Request location on component mount
    requestLocation();
  }, []);

  async function requestLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeatherData(lat, lon);
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setError("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setError("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        setError("An unknown error occurred.");
        break;
      default:
        setError("An error occurred.");
        break;
    }
  }

  async function getWeatherData(lat, lon) {
    const apiKey = 'f0ef21bf9bb243ffbe3162311242907'; // Replace with your actual API key
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`;
    const url = proxyUrl + encodeURIComponent(apiUrl);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const weatherData = JSON.parse(data.contents);
      setWeather(weatherData);
      setLoading(false);
    } catch (error) {
      setError('Error fetching weather data: ' + error.message);
    }
  }

  const getWeatherIcon = (condition) => {
    switch (true) {
      case /Clear/.test(condition):
        return <FaSun />;
      case /Partly cloudy/.test(condition):
        return <FaCloudSun />;
      case /Cloudy/.test(condition):
        return <FaCloud />;
      case /Overcast/.test(condition):
        return <FaCloud />;
      case /Patchy rain nearby/.test(condition):
      case /Light rain/.test(condition):
        return <FaCloudShowersHeavy />;
      case /Moderate rain/.test(condition):
      case /Heavy rain/.test(condition):
        return <FaCloudRain />;
      case /Showers/.test(condition):
        return <FaCloudSunRain />;
      default:
        return <FaCloudMeatball />;
    }
  };
  if (loading) {
    return <Preloader />;
  }
  return (<>
    <div className="App">
      <div className="flex bg-gray-900 text-white justify-between px-2 py-1"><div className="city text-center">{weather.location.name}, {weather.location.country}</div>
        <div className="city text-center">Updated: {weather.current.last_updated}</div></div>
      <h1 className='flex justify-center items-center gap-2 text-2xl py-3 text-white bg-green-800'><span>EcoGuard</span><span className='animate-pulse'><FaLeaf /></span></h1>
      {/* Online App */}
      <div className="bg-background">
        <div className="relative overflow-clip mb-2">
          <img className="w-full hover:scale-125 transition-transform duration-1000 sm:h-44 lg:h-[40vh] object-top object-cover" src="https://static4.depositphotos.com/1015060/482/i/450/depositphotos_4824453-stock-photo-green-park.jpg" alt="Weather Image" />
        </div>
        <div className="grid grid-cols-2 px-4 my-11 gap-4">
          <div className="bg-card hover:from-green-500 cursor-pointer  bg-gradient-to-br from-green-300 to-green-200 shadow-2xl shadow-green-500 p-4 rounded-lg flex flex-col gap-1 justify-center items-center">
            <div className="text-green-800 text-6xl"><FaCanadianMapleLeaf /></div>
            <h3 className="text-lg font-bold">Green Diseases</h3>
            <h3 className="text-md font-semibold">Causes and Cures</h3>
            <a href='/info' className="p-2 rounded-lg underline-offset-4 underline font-semibold text-sm">Solutions &gt;</a>
          </div>
          <div className="bg-card hover:from-green-500 cursor-pointer  bg-gradient-to-tr from-green-300 to-green-200 shadow-2xl shadow-green-500 p-4 rounded-lg flex flex-col gap-1 justify-center items-center">
            <div className="text-green-600 text-6xl">{getWeatherIcon(weather.current.condition.text)}</div>
            <h3 className="text-lg pt-4 mb-[-20px] font-bold">Weather Updates</h3>
            <p><span className="font-semibold">{weather.current.temp_c}°C</span>, {weather.current.wind_kph} KMPH</p>
            <p>{weather.current.condition.text}</p>
            <button className="p-2 rounded-lg underline-offset-4 underline font-semibold text-sm">Forecast &gt;</button>
          </div>
        </div>
      </div>
      {/* Online App */}

      {error && <p className="error">{error}</p>}
      
    </div>
    <Footer/>

  </>
  );
}}

export default Home
