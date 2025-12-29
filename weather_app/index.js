const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const resultDiv = document.getElementById("weather-result");

let currentTempC = null; // store temperature here
let map;
let marker;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();
  if (!city) return;

  resultDiv.textContent = "Fetching weather...";

  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      resultDiv.textContent = "City not found";
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    const weather = weatherData.current_weather;
    currentTempC = weather.temperature; // set here, after fetch

    // Initialize map only once
    if (!map) {
      map = L.map("map").setView([latitude, longitude], 10);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      marker = L.marker([latitude, longitude]).addTo(map);
    } else {
      // Update map position for new city
      map.setView([latitude, longitude], 10);
      marker.setLatLng([latitude, longitude]);
    }


    // Now render the HTML including temp buttons
    resultDiv.innerHTML = `
      <h2>${name}, ${country}</h2>
      <p id="temp">Temperature: ${currentTempC} °C</p>
      <p>Wind Speed: ${weather.windspeed} km/h</p>
      <button id="celsius-btn">°C</button>
      <button id="fahrenheit-btn">°F</button>
    `;

    // Attach event listeners AFTER buttons exist
    document.getElementById("celsius-btn").addEventListener("click", () => {
      document.getElementById("temp").textContent = `Temperature: ${currentTempC} °C`;
    });

    document.getElementById("fahrenheit-btn").addEventListener("click", () => {
      const tempF = (currentTempC * 9/5 + 32).toFixed(1);
      document.getElementById("temp").textContent = `Temperature: ${tempF} °F`;
    });

  } catch (err) {
    console.error(err);
    resultDiv.textContent = "Something went wrong";
  }
});
