class Weather {
    constructor(city, country) {
        this.key = 'e79d25be47181176dcdd3dd6439fa361';
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
