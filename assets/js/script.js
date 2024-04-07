$('form').on('submit', function(event) {
    event.preventDefault();

    const userInput = {
        parameter1: document.getElementById('cityinput').value
    };

    localStorage.setItem('userInput', JSON.stringify(userInput));

    const baseUrl = 'http://api.openweathermap.org/geo/1.0/direct';
    let apiUrl = `${baseUrl}?q=${userInput.parameter1}&limit=5&appid=3897110e99b828b9b2fe21747b242046`;
    console.log(apiUrl)
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const cityDetails = data;
            const lat = cityDetails[0].lat;
            const long = cityDetails[0].lon;
            console.log(lat)
            console.log(long)

            const baseWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    let apiWeatherUrl = `${baseWeatherUrl}?lat=${lat}&lon=${long}&appid=3897110e99b828b9b2fe21747b242046&units=imperial`;
    console.log(apiWeatherUrl)
    fetch(apiWeatherUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const today = dayjs().format();
            const cityWeatherDetails = data;
            const name = cityWeatherDetails.city.name;
            const temp = cityWeatherDetails.list[0].main.temp;
            const wind = cityWeatherDetails.list[0].wind.speed;
            const humidity = cityWeatherDetails.list[0].main.humidity;
            console.log(name);
            console.log(temp);
            console.log(wind);
            console.log(humidity);
            const cname = document.createElement('div');
            cname.textContent = name + ' (' + today + ')';
            const cNameParent = document.getElementById('cityd');
            cNameParent.appendChild(cname);
            const ctemp = document.createElement('div');
            ctemp.textContent = 'Temp: ' + temp + 'F';
            const cTempParent = document.getElementById('tempd');
            cTempParent.appendChild(ctemp);
            const cwind = document.createElement('div');
            cwind.textContent = 'Wind Speed: ' + wind + ' MPH';
            const cWindParent = document.getElementById('windd');
            cWindParent.appendChild(cwind);
            const chumid = document.createElement('div');
            chumid.textContent = 'Humidity: ' + humidity + ' %';
            const cHumidParent = document.getElementById('humidityd');
            cHumidParent.appendChild(chumid);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
