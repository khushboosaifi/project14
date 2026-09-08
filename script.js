const apiKey = "228f1890a2c27b89d34d2cbfaaabffd2";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search i");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML = data.wind.speed;
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "cloudy.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "sunrise.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "OIP-removebg-preview.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "drizzle.jpg";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "mist.png";
  }
}
searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
