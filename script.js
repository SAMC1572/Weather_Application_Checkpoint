document.getElementById('getWeather').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '472fa71bcd23b870830aa55d739c1afc'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('weatherInfo').innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = '<p>City not found</p>';
    }
}
