const searchInputElement = document.getElementById('search-input');
const cityHolder = document.querySelector('.city');
const tempratureHolder = document.querySelector('.temprature');
const humidityHolder = document.querySelector('.humidity');
const windSpeedHolder = document.querySelector('.wind-speed');
const searchButton = document.querySelector('.btn-search');
const countryHolder = document.querySelector('.country');

const unit = 'metric';

async function getWeatherData(cityName = 'Kathmandu') {
  const apiKey = 'eeab818eb530e343b884e9207bc5313a';
  const url = `https://api.openweathermap.org/data/2.5/weather?units=${unit}&q=${cityName}&appid=${apiKey}`;

  //apiResponse
  const response = await fetch(url);
  const weatherDate = await response.json();
  if (weatherDate.cod === 400) {
    alert('No City');
  }
  console.log(weatherDate);
  cityHolder.innerHTML = weatherDate.name;
  tempratureHolder.innerHTML = `<p>${Math.round(weatherDate.main.temp)} °C<p/>`;
  humidityHolder.innerHTML = `<p>${weatherDate.main.humidity}%<p/>`;
  windSpeedHolder.innerHTML = `<p>${weatherDate.wind.speed} km/h<p/>`;
  countryHolder.innerHTML = `${weatherDate.sys.country}`;
}

searchButton.addEventListener('click', () => {
  const cityName = searchInputElement.value;
  getWeatherData(cityName);
});
