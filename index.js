const form = document.forms["weatherForm"];
console.log(form);

const formHandler = (event) => {
  event.preventDefault();
  let input = form.searchCity.value;

  const getWeather = async (input) => {
    let city = input;

    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=830f33f9472947c5886110238242801&q=" +
        city,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    console.log(weatherData);

    const displayWeather = () => {
      const locationName = weatherData.location.name;
      const locationTime = weatherData.location.localtime;
      const locationWeather = weatherData.current.condition.text;
      const weatherIcon = weatherData.current.condition.icon;
      const locationTemperature = weatherData.current.temp_c;
      const locationIsDay = weatherData.current.is_day;
      const locationWindSpeed = weatherData.current.wind_kph;
      const locationHumidity = weatherData.current.humidity;

      const icon = document.querySelector(".icon");
      const name = document.querySelector(".name");
      const time = document.querySelector(".time");
      const weather = document.querySelector(".weather");
      const temperature = document.querySelector(".temperature");
      const windSpeed = document.querySelector(".windSpeed");
      const humidity = document.querySelector(".humidity");

      icon.src = weatherIcon;
      name.textContent = locationName;
      time.textContent = locationTime;
      weather.textContent = locationWeather;
      temperature.textContent = locationTemperature;
      windSpeed.textContent = locationWindSpeed;
      humidity.textContent = locationWindSpeed;
    };
    displayWeather();
  };

  getWeather(input);
};
form.addEventListener("submit", formHandler);
