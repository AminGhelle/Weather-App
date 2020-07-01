class Weather {
    constructor(city, country) {
        this.key = 'df4c33c9856adfe81107f30528f0e02a';
        this.city = city;
        this.country = country;
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&units=metric&appid=${this.key}`);

        const responseData = await response.json();
        
        return responseData;
        
    }

        changeLocation(city, country) {
            this.city = city;
            this.country = country;
        }
    }
