class Openweather {
    constructor(city, countryCode) {
        this.APIkey = 'e79d25be47181176dcdd3dd6439fa361';
        this.city = city;
        this.countryCode = countryCode;
    }

//   Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&units=metric&appid=${this.APIkey}`);

        const responseData = await response.json();
        
        return responseData;
        
    }
// Change Location
        changeLocation(city, countryCode) {
            this.city = city;
            this.countryCode = countryCode;
        }
    }
