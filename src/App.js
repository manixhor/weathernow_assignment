import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // This function talks to Open-Meteo and gets the weather
  async function getWeather() {
    if (!city) {
      setError("Please type a city name!");
      setWeather(null);
      return;
    }
    setError("");
    setWeather(null);

    try {
      // First, get city coordinates (needed for Open-Meteo)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0) {
        setError("City not found. Try another name!");
        return;
      }
      const { latitude, longitude, name, country } = geoData.results[0];

      // Now, get current weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();
      if (!weatherData.current_weather) {
        setError("Sorry, couldn't get weather info!");
        return;
      }

      setWeather({
        name,
        country,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        code: weatherData.current_weather.weathercode,
      });
    } catch {
      setError("Oops! Something went wrong. Try again!");
    }
  }

  // Choose an icon for the weather
  function getWeatherIcon(code) {
    if (code < 3) return "☀️";
    if (code < 50) return "🌤️";
    if (code < 70) return "🌧️";
    if (code < 100) return "⛈️";
    return "❓";
  }

  return (
    <div className="App">
      <h1>Weather Now</h1>
      <p className="greeting">Hello Jamie! 👋</p>

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Type city name..."
      />
      <button onClick={getWeather}>Get Weather</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && (
        <div className="weather-info">
          <h2>
            {weather.name}, {weather.country}
          </h2>
          <span style={{ fontSize: "2em" }}>
            {getWeatherIcon(weather.code)}
          </span>
          <p>
            <b>Temperature:</b> {weather.temp} °C
          </p>
          <p>
            <b>Wind Speed:</b> {weather.wind} km/h
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
