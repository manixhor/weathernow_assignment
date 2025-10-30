# Weather Now ⛅

A simple, user-friendly web application that lets you check current weather conditions for any city in the world.

---

## 📋 Project Overview

**Weather Now** is a responsive weather application built with React that provides real-time weather information for any city worldwide. Simply type in a city name and get instant access to current temperature, weather conditions, and wind speed.

---

## ✨ Features

- 🔍 **City Search** - Search for weather in any city worldwide
- 🌡️ **Real-time Temperature** - Get accurate current temperature in Celsius
- 🌤️ **Visual Weather Icons** - Intuitive emoji icons (☀️ sunny, 🌧️ rainy, ⛈️ stormy)
- 💨 **Wind Speed Information** - Check current wind conditions in km/h
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ⚠️ **Smart Error Handling** - Friendly error messages for invalid cities or network issues
- 👋 **Personalized Greeting** - Welcoming message when you open the app
- ⚡ **Fast Loading** - Instant weather data with smooth animations

---

## 🛠️ Technology Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | React 18 |
| **Styling** | CSS3 (with animations) |
| **API** | Open-Meteo (free, no authentication) |
| **State Management** | React Hooks (useState) |
| **Deployment** | CodeSandbox / StackBlitz |

---

## 🚀 Live Demo

**Try the app here:** [Weather Now Live Demo](https://codesandbox.io/s/weather-now)

---

## 📦 Installation & Setup

### Option 1: Quick Setup on CodeSandbox (Recommended)

1. Visit [codesandbox.io](https://codesandbox.io)
2. Click **"Create Sandbox"** → Select **"React"**
3. Replace the default `App.js` with the code from this repository
4. Update `App.css` with the provided styles
5. Your app will automatically run in the preview panel!

### Option 2: Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/weather-now.git

# Navigate to the project directory
cd weather-now

# Install dependencies
npm install

# Start the development server
npm start

# Open your browser and visit http://localhost:3000
```

---

## 📖 How to Use

1. **Open the App** - Navigate to the Weather Now application
2. **See Your Greeting** - Notice the friendly "Hello Jamie! 👋" message
3. **Enter a City** - Type any city name in the search box (e.g., "London", "Tokyo", "Mumbai")
4. **Get Weather** - Click the "Get Weather" button
5. **View Results** - Weather information appears with temperature, wind speed, and a weather icon
6. **Try More Cities** - Search for as many cities as you want!

### Example Cities to Try:
- London, United Kingdom
- Paris, France
- Tokyo, Japan
- New York, United States
- Mumbai, India
- Sydney, Australia
- Dubai, UAE
- Toronto, Canada

---
## 🔌 API Integration

### Open-Meteo API

This project uses the **Open-Meteo API** - a free, open-source weather API that requires no authentication.

#### Endpoints Used:

**1. Geocoding API** (converts city name to coordinates)
```
https://geocoding-api.open-meteo.com/v1/search?name={cityName}
```

**2. Weather Forecast API** (fetches current weather)
```
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true
```

#### Why Open-Meteo?
- ✅ Completely free to use
- ✅ No API key or registration required
- ✅ Reliable and fast
- ✅ Global coverage
- ✅ No rate limiting for basic usage

---

## 💻 Code Explanation

### State Management

The app uses React's `useState` hook to manage three pieces of state:

```javascript
const [city, setCity] = useState("");           // Stores the city name input
const [weather, setWeather] = useState(null);   // Stores fetched weather data
const [error, setError] = useState("");         // Stores error messages
```

### Data Flow

1. **User Input** → User types city name → `setCity()` updates state
2. **Button Click** → Triggers `getWeather()` function
3. **API Call 1** → Fetch city coordinates from Geocoding API
4. **API Call 2** → Fetch weather data using coordinates
5. **Display Results** → Show weather info or error message

### Weather Icon Logic

Weather codes from Open-Meteo are converted to intuitive emojis:

```javascript
function getWeatherIcon(code) {
  if (code < 3) return "☀️";      // Clear/Sunny
  if (code < 50) return "🌤️";    // Partly Cloudy
  if (code < 70) return "🌧️";    // Rainy
  if (code < 100) return "⛈️";   // Thunderstorm
  return "❓";                    // Unknown
}
```

---

## 🎓 What I Learned

Building this project taught me:

1. **API Integration** - How to fetch data from external APIs and handle responses
2. **Async Operations** - Managing asynchronous JavaScript with async/await
3. **State Management** - Using React hooks to manage application state
4. **Error Handling** - Creating robust applications that handle failures gracefully
5. **Responsive Design** - Building interfaces that work across all devices
6. **User Experience** - Providing helpful feedback and smooth interactions
7. **Documentation** - Writing clear, comprehensive documentation


---


## 🙏 Acknowledgments

- **Open-Meteo** - For providing free, reliable weather data API
- **React Team** - For the amazing React framework
- **CodeSandbox** - For the excellent online development environment
- **Aganitha Cognitive Solutions** - For the opportunity and clear assignment requirements

---

## 🌟 Show Your Support

If you found this project helpful, please consider:

- ⭐ Starring this repository
- 🔄 Sharing it with others
- 🐛 Reporting bugs or suggesting features
- 🤝 Contributing improvements

---





**Thank you for checking out Weather Now! Happy weather checking! 🌤️**
