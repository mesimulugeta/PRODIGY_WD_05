const apiKey = "a70047eaa7e0bc9fbff09629c55c2def";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
        const weatherDiv = document.querySelector(".weather");
        const errorDiv = document.querySelector(".error");
    
        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`); 
    
            if (response.status == 404) {
                errorDiv.style.display = "block";
                weatherDiv.style.display = "none";
            } else {
                var data = await response.json();
    
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; 
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; 
    
                weatherDiv.style.display = "block";
                errorDiv.style.display = "none";
            }
        }
    
        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });