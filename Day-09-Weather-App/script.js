    const apiKey = '6495accc3e9b099b311a69659696e1a0';
    const cityInput = document.getElementById('cityInput');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const weatherContainer = document.getElementById('weatherInfoContainer');

    function getWeatherIconClass(weatherMain, isLarge = false) {
        const condition = weatherMain.toLowerCase();
        const iconMap = {
            clear: { ri: 'ri-sun-line', fa: 'fas fa-sun' },
            clouds: { ri: 'ri-cloudy-line', fa: 'fas fa-cloud' },
            rain: { ri: 'ri-showers-line', fa: 'fas fa-cloud-showers-heavy' },
            drizzle: { ri: 'ri-drizzle-line', fa: 'fas fa-cloud-rain' },
            thunderstorm: { ri: 'ri-thunderstorms-line', fa: 'fas fa-bolt' },
            snow: { ri: 'ri-snowy-line', fa: 'fas fa-snowflake' },
            mist: { ri: 'ri-foggy-line', fa: 'fas fa-smog' },
            fog: { ri: 'ri-foggy-line', fa: 'fas fa-smog' },
            haze: { ri: 'ri-haze-line', fa: 'fas fa-smog' }
        };
        const mapped = iconMap[condition] || { ri: 'ri-cloud-sun-line', fa: 'fas fa-cloud-sun' };
        return isLarge ? mapped.ri : mapped.fa;
    }

    function formatTime(unixDt, timezoneOffsetSec) {
        const date = new Date((unixDt + timezoneOffsetSec) * 1000);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function displayWeather(data) {
        const { name, sys, weather, main, wind, dt, timezone } = data;
        const condition = weather[0].main;
        const description = weather[0].description;
        const temp = Math.round(main.temp);
        const feelsLike = Math.round(main.feels_like);
        const humidity = main.humidity;
        const windSpeed = wind.speed;
        const pressure = main.pressure;
        const iconClassLarge = getWeatherIconClass(condition, true);
        const iconSmall = getWeatherIconClass(condition, false);
        
        const sunriseTime = formatTime(sys.sunrise, timezone);
        const sunsetTime = formatTime(sys.sunset, timezone);
        
        let accentGradient = "";
        if (condition === "Clear") accentGradient = "linear-gradient(145deg, #f59e0b30, #fcd34d20)";
        else if (condition === "Clouds") accentGradient = "linear-gradient(145deg, #64748b30, #47556930)";
        else if (condition === "Rain") accentGradient = "linear-gradient(145deg, #3b82f630, #1e3a8a30)";
        else if (condition === "Snow") accentGradient = "linear-gradient(145deg, #bae6fd30, #7dd3fc20)";
        else accentGradient = "linear-gradient(145deg, #a855f730, #7e22ce20)";
        
        const weatherHTML = `
            <div style="background: ${accentGradient}; border-radius: 2rem; padding: 0.2rem 0.2rem 0.8rem 0.2rem; transition: all 0.3s;">
                <div class="weather-main-info px-3 pt-3">
                    <div>
                        <div class="city-header d-flex align-items-center gap-2">
                            <i class="ri-map-pin-fill" style="font-size: 1.6rem; color: #facc15;"></i>
                            <span>${name}, ${sys.country}</span>
                        </div>
                        <div class="condition-badge mt-2">
                            <i class="${iconSmall} me-1" style="color:#ffe5a3;"></i>
                            <span style="text-transform: capitalize;">${description}</span>
                        </div>
                    </div>
                    <div class="text-end">
                        <div class="d-flex align-items-center gap-1">
                            <i class="${iconClassLarge}" style="font-size: 3rem; filter: drop-shadow(0 6px 12px rgba(0,0,0,0.2)); color:#FFE484;"></i>
                        </div>
                    </div>
                </div>
                
                <div class="weather-grid px-2">
                    <div class="weather-card-lux">
                        <i class="ri-thermometer-line" style="font-size: 2rem; color: #ffb347;"></i>
                        <div class="metric-value">${temp}°</div>
                        <div class="metric-label">Temperature</div>
                        <div class="feels-like">Feels like ${feelsLike}°</div>
                    </div>
                    <div class="weather-card-lux">
                        <i class="ri-drop-line" style="font-size: 2rem; color:#60a5fa;"></i>
                        <div class="metric-value">${humidity}%</div>
                        <div class="metric-label">Humidity</div>
                        <div class="feels-like">Pressure ${pressure} hPa</div>
                    </div>
                    <div class="weather-card-lux">
                        <i class="ri-windy-line" style="font-size: 2rem; color:#a5f3fc;"></i>
                        <div class="metric-value">${windSpeed}<span style="font-size: 0.9rem;"> m/s</span></div>
                        <div class="metric-label">Wind speed</div>
                        <div class="feels-like">Gust dynamic</div>
                    </div>
                    <div class="weather-card-lux">
                        <i class="ri-sun-line" style="font-size: 2rem; color:#fde047;"></i>
                        <div class="metric-value" style="font-size: 1.1rem;">${sunriseTime}</div>
                        <div class="metric-label">Sunrise</div>
                        <div class="feels-like"><i class="ri-moon-line"></i> ${sunsetTime}</div>
                    </div>
                </div>
                
                <div class="d-flex justify-content-between flex-wrap px-4 mt-2 gap-2 text-white-70 small" style="font-size: 0.8rem;">
                    <span class="text-white"><i class="ri-eye-line"></i> Visibility: ${(data.visibility / 1000).toFixed(1)} km</span>
                    <span class="text-white"><i class="ri-cloud-line"></i> Cloudiness: ${data.clouds.all}%</span>
                    <span class="text-white"><i class="ri-compass-line"></i> ${new Date(dt * 1000).toLocaleDateString('en-US', { weekday:'short', hour:'2-digit', minute:'2-digit' })}</span>
                </div>
            </div>
        `;
        weatherContainer.innerHTML = weatherHTML;
    }
    
    function showError(message) {
        weatherContainer.innerHTML = `
            <div class="glass-master p-4 text-center mt-2" style="background: rgba(0,0,0,0.45); backdrop-filter: blur(12px); border-left: 5px solid #f97316;">
                <i class="ri-error-warning-line" style="font-size: 3rem; color: #ffb347;"></i>
                <h5 class="mt-2 text-white">${message}</h5>
                <p class="text-white-50">try another city, spelling matters ✨</p>
            </div>
        `;
    }
    
    function showLoading() {
        weatherContainer.innerHTML = `
            <div class="d-flex flex-column align-items-center justify-content-center py-5">
                <div class="loading-spinner-custom"></div>
                <p class="mt-3 text-white-50"><i class="ri-cloud-windy-line"></i> fetching atmosphere...</p>
            </div>
        `;
    }
    
    async function getWeather(city) {
        if (!city) {
            showError("City cannot be empty");
            return;
        }
        showLoading();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                if (response.status === 404) throw new Error("City not found — check name");
                else throw new Error(`Weather service error (${response.status})`);
            }
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            console.error(error);
            showError(error.message);
        }
    }
    
    getWeatherBtn.addEventListener('click', () => {
        let city = cityInput.value.trim();
        if (city === "") {
            showError("Please enter a city name 🌍");
            return;
        }
        getWeather(city);
    });
    
    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const city = cityInput.value.trim();
            if (city !== "") getWeather(city);
            else showError("write a city to discover");
        }
    });
    
    window.addEventListener('load', () => {
        if (cityInput.value.trim() === "Tokyo") {
            getWeather("Tokyo");
        } else {
            getWeather(cityInput.value.trim() || "London");
        }
    });
    