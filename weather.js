class Weather{
  constructor(city, country){
    this.apiKey = 'e6a1e6817a496cf4dc102148564a5797';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
    
  }

  // Change weather Loaction
  changeLocation(city, country){
    this.city = city;
    this.country = country;
  }
}

