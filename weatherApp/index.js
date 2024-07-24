// Select DOM elements
const searchBox = document.querySelector(".weather-searchBox");
const locationApi = document.querySelector(".weather-city");
const locationTime = document.querySelector(".weather-dateTime");
const forecast = document.querySelector(".weather-forcast");
const weatherIcon = document.querySelector(".weather-icon");
const weatherTemp = document.querySelector(".weather-temprature");
const weatherMinDeg = document.querySelector(".weather-min");
const weatherMaxDeg = document.querySelector(".weather-max");
const weatherFeelsinfo = document.querySelector(".weather-feelsLike");
const weatherHuminfo = document.querySelector(".weather-humidity");
const weatherWindinfo = document.querySelector(".weather-wind");
const weatherPressinfo = document.querySelector(".weather-pressure");
const search = document.querySelector(".search-box");

let locationName = "Pokhara";

// Function for search box
const inputLocation = async (e) => {
    e.preventDefault();
    locationName = search.value;
    await weatherApi();
}

// Function for country name
const apiCountry = async (name, sys) => {
    const countryName = sys.country;
    const countryFullname = new Intl.DisplayNames(['en'], { type: 'region' });
    locationApi.textContent = `${name}, ${countryFullname.of(countryName)}`;
}

// Function to get date and time
const apiDT = async (dateTime) => {
    const dt = new Date(dateTime * 1000);
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    const todayDate = new Intl.DateTimeFormat("en-US", dateOptions);
    const newDate = todayDate.format(dt);
    locationTime.textContent = `${newDate}`;
}

// Weather forecast and icons
const forecastInfo = async (weather) => {
    const weatherForecast = weather[0].main;
    const weatherIconCode = weather[0].icon;
    forecast.textContent = `${weatherForecast}`;
    weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherIconCode}@4x.png"/>`;
}

// Function to get main and wind values
const apiDegree = async (main, wind) => {
    const minDeg = (main.temp_min - 273.15).toFixed(2);
    const maxDeg = (main.temp_max - 273.15).toFixed(2);
    const feelsLike = (main.feels_like - 273.15).toFixed(2);
    const humidity = main.humidity;
    const pressure = main.pressure;
    const windSpeed = wind.speed;

    weatherMinDeg.innerHTML = `Min: ${Math.round(minDeg)}&deg;C`;
    weatherMaxDeg.innerHTML = `Max: ${maxDeg}&deg;C`;
    weatherFeelsinfo.innerHTML = `${feelsLike}&deg;C`;
    weatherHuminfo.innerHTML = `${humidity}%`;
    weatherPressinfo.innerHTML = `${pressure} hPa`;
    weatherWindinfo.innerHTML = `${windSpeed} m/s`;
}

// Function to get weather API data
const weatherApi = async () => {
    try {
        const apiKey = "560c2ccdce8d37ba1086c151dee1cff5"; // Replace with your actual API key
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${apiKey}`;
        const response = await fetch(api);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const { name, sys, dt, main, wind, weather } = data;

        // Function calls
        await apiCountry(name, sys);
        await apiDT(dt);
        await apiDegree(main, wind);
        await forecastInfo(weather);

    } catch (error) {
        console.error('Error fetching the weather data:', error);
        const errorMessage = 'Sorry, something went wrong. Please try again later.';
        weatherMinDeg.textContent = errorMessage;
        weatherMaxDeg.textContent = errorMessage;
        weatherFeelsinfo.textContent = errorMessage;
        weatherHuminfo.textContent = errorMessage;
        weatherPressinfo.textContent = errorMessage;
        weatherWindinfo.textContent = errorMessage;
    }
}

window.addEventListener("load", weatherApi);
searchBox.addEventListener("submit", inputLocation);
