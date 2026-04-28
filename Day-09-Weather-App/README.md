# 🌤️ Day 9: Weather App (Nimbus) — Real-time Weather with API

## 📝 Description
Nimbus is a modern, elegant weather application that provides real-time weather data for any city worldwide. It features a stunning glassmorphism UI, dynamic weather icons, sunrise/sunset times, and detailed weather metrics including temperature, humidity, wind speed, pressure, and visibility.

## ✨ Features
- **Real-time Weather Data** - Live data from OpenWeatherMap API
- **City Search** - Search any city worldwide
- **Dynamic Weather Icons** - Changes based on weather condition (Clear, Clouds, Rain, Snow, etc.)
- **Detailed Metrics**:
  - Temperature (with feels-like)
  - Humidity percentage
  - Wind speed (m/s)
  - Atmospheric pressure
  - Visibility distance
  - Cloudiness percentage
- **Sunrise & Sunset Times** - Localized to the searched city
- **Condition-based Gradients** - Dynamic background gradients matching weather
- **Loading Animation** - Spinner while fetching data
- **Error Handling** - User-friendly error messages
- **Responsive Design** - Works perfectly on all devices
- **Glassmorphism UI** - Modern blur effect with animated background
- **Enter Key Support** - Press Enter to search

## 🛠 Tech Used
- HTML5
- CSS3 (Glassmorphism, Keyframe Animations, Gradients, Grid/Flexbox)
- JavaScript (ES6+)
- OpenWeatherMap API (v2.5)
- Bootstrap 5.3
- Font Awesome 6
- Remix Icon CDN
- Google Fonts (Inter)


## 🔄 How It Works

### API Integration Flow:
1. User enters city name (default: Tokyo)
2. Clicks search button OR presses Enter
3. App shows loading spinner
4. Fetches data from OpenWeatherMap API: https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}
5. Parses JSON response
6. Extracts weather data (temp, humidity, wind, etc.)
7. Displays beautifully formatted weather cards

### Weather Data Display:

| Data Point | Source | Display Format |
|------------|--------|----------------|
| Temperature | main.temp | °C (rounded) |
| Feels Like | main.feels_like | °C (rounded) |
| Humidity | main.humidity | Percentage |
| Pressure | main.pressure | hPa |
| Wind Speed | wind.speed | m/s |
| Visibility | visibility | km |
| Cloudiness | clouds.all | Percentage |
| Sunrise | sys.sunrise | Local time (HH:MM) |
| Sunset | sys.sunset | Local time (HH:MM) |

## 🎨 Dynamic Features

### Weather-based Icons:

| Condition | Remix Icon | Font Awesome |
|-----------|------------|--------------|
| Clear | ri-sun-line | fas fa-sun |
| Clouds | ri-cloudy-line | fas fa-cloud |
| Rain | ri-showers-line | fas fa-cloud-showers-heavy |
| Snow | ri-snowy-line | fas fa-snowflake |
| Thunderstorm | ri-thunderstorms-line | fas fa-bolt |
| Mist/Fog | ri-foggy-line | fas fa-smog |

### Weather-based Gradients:

| Condition | Gradient |
|-----------|----------|
| Clear | orange/yellow tones |
| Clouds | slate/gray tones |
| Rain | blue tones |
| Snow | cyan/light blue tones |
| Default | purple tones |

## ⚙️ API Details

### Endpoint: GET https://api.openweathermap.org/data/2.5/weather


### Parameters:
| Parameter | Value | Description |
|-----------|-------|-------------|
| q | city name | City name (e.g., London, Tokyo) |
| units | metric | Returns temperature in Celsius |
| appid | API Key | OpenWeatherMap API key |

### Sample Response Data:
```json
{
  "name": "Tokyo",
  "sys": { "country": "JP", "sunrise": 1714289400, "sunset": 1714338000 },
  "weather": [{ "main": "Clear", "description": "clear sky" }],
  "main": { "temp": 22.5, "feels_like": 21.8, "humidity": 65, "pressure": 1012 },
  "wind": { "speed": 3.6 },
  "visibility": 10000,
  "clouds": { "all": 0 }
}

---

## 🚧 Challenges Faced

- **Timezone Handling**: Converting UNIX timestamps to local time for sunrise and sunset.  
- **Weather Icons**: Dynamically mapping API weather conditions to appropriate icons.  
- **API Error Handling**: Differentiating between network errors, invalid cities, and API limits.  
- **Async/Await**: Properly handling asynchronous API calls with loading states.  
- **Condition-based UI**: Changing gradients and colors based on weather type.  
- **Responsive Grid**: Ensuring weather cards look good on all screen sizes.  

---

## 💡 Key Learnings

- **API Integration**: Using `fetch` with `async/await` for clean and efficient data handling.  
- **Error Handling**: Handling both network errors and API response errors (404, 401, etc.).  
- **Timezone Conversion**: Calculating accurate local times using UNIX timestamps and timezone offsets.  
- **Dynamic UI**: Updating the entire visual experience based on weather conditions.  
- **Glassmorphism**: Utilizing `backdrop-filter` and `rgba` for a modern UI feel.  
- **Loading States**: Providing user feedback during asynchronous operations.  
