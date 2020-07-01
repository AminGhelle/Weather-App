class UI {
  //List elements that will have stuff inserted into it
  constructor() {
      this.location = document.getElementById('w-location');
      this.desc = document.getElementById('w-desc');
      this.string = document.getElementById('w-string');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.pressure = document.getElementById('w-pressure');
      this.dewpoint = document.getElementById('w-dewpoint');
      this.wind = document.getElementById('w-wind');
      
  }

  paint(weather) {
      this.location.textContent = `${weather.name}, ${weather.sys.country}`;
      this.desc.textContent = weather.weather[0].description;
      this.string.textContent = `${weather.main.temp} (Celsius)`;
      this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
      this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
      this.pressure.textContent = `Relative pressure: ${weather.main.pressure}`;
      this.dewpoint.textContent = `Relative Dewpoint: ${weather.wind.deg} °C`;
      this.wind.textContent = `Wind speed: ${weather.wind.speed}mph`;
      
  }
}

