$('form').on('submit', function (event) {
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
                    const today = dayjs();
                    const nextFiveDays = [];
                    for (let i = 0; i <= 4; i++) {
                        const nextDay = today.add(i, 'day');
                        nextFiveDays.push(nextDay);
                    }
                    console.log(nextFiveDays);
                    const cityWeatherDetails = data;
                    const name = cityWeatherDetails.city.name;
                    const sky = cityWeatherDetails.list[0].weather[0].main;
                    const temp = cityWeatherDetails.list[0].main.temp;
                    const wind = cityWeatherDetails.list[0].wind.speed;
                    const humidity = cityWeatherDetails.list[0].main.humidity;
                    console.log(name);
                    console.log(sky);
                    console.log(temp);
                    console.log(wind);
                    console.log(humidity);
                    const cname = document.createElement('div');
                    cname.textContent = name + ' (' + dayjs().format('YYYY-MM-DD') + ')';
                    const cNameParent = document.getElementById('cityd');
                    cNameParent.appendChild(cname);
                    const csky = document.createElement('div');
                    csky.textContent = 'Sky: ' + sky;
                    const cSkyParent = document.getElementById('skyd');
                    cSkyParent.appendChild(csky);
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

                    const date1 = nextFiveDays[0];
                    const sky1 = cityWeatherDetails.list[1].weather[0].main;
                    const temp1 = cityWeatherDetails.list[1].main.temp;
                    const wind1 = cityWeatherDetails.list[1].wind.speed;
                    const humidity1 = cityWeatherDetails.list[1].main.humidity;
                    console.log(date1);
                    console.log(sky1);
                    console.log(temp1);
                    console.log(wind1);
                    console.log(humidity1);
                    const cdate1 = document.createElement('div');
                    cdate1.textContent = date1;
                    const cDateParent1 = document.getElementById('date1');
                    cDateParent1.appendChild(cdate1);
                    const csky1 = document.createElement('div');
                    csky1.textContent = 'Sky: ' + sky1;
                    const cSkyParent1 = document.getElementById('sky1');
                    cSkyParent1.appendChild(csky1);
                    const ctemp1 = document.createElement('div');
                    ctemp1.textContent = 'Temp: ' + temp1 + 'F';
                    const cTempParent1 = document.getElementById('temp1');
                    cTempParent1.appendChild(ctemp1);
                    const cwind1 = document.createElement('div');
                    cwind1.textContent = 'Wind Speed: ' + wind1 + ' MPH';
                    const cWindParent1 = document.getElementById('wind1');
                    cWindParent1.appendChild(cwind1);
                    const chumid1 = document.createElement('div');
                    chumid1.textContent = 'Humidity: ' + humidity1 + ' %';
                    const cHumidParent1 = document.getElementById('humid1');
                    cHumidParent1.appendChild(chumid1);

                    const date2 = nextFiveDays[1];
                    const sky2 = cityWeatherDetails.list[2].weather[0].main;
                    const temp2 = cityWeatherDetails.list[2].main.temp;
                    const wind2 = cityWeatherDetails.list[2].wind.speed;
                    const humidity2 = cityWeatherDetails.list[2].main.humidity;
                    console.log(date2);
                    console.log(sky2);
                    console.log(temp2);
                    console.log(wind2);
                    console.log(humidity2);
                    const cdate2 = document.createElement('div');
                    cdate2.textContent = date2;
                    const cDateParent2 = document.getElementById('date2');
                    cDateParent2.appendChild(cdate2);
                    const csky2 = document.createElement('div');
                    csky2.textContent = 'Sky: ' + sky2;
                    const cSkyParent2 = document.getElementById('sky2');
                    cSkyParent2.appendChild(csky2);
                    const ctemp2 = document.createElement('div');
                    ctemp2.textContent = 'Temp: ' + temp2 + 'F';
                    const cTempParent2 = document.getElementById('temp2');
                    cTempParent2.appendChild(ctemp2);
                    const cwind2 = document.createElement('div');
                    cwind2.textContent = 'Wind Speed: ' + wind2 + ' MPH';
                    const cWindParent2 = document.getElementById('wind2');
                    cWindParent2.appendChild(cwind2);
                    const chumid2 = document.createElement('div');
                    chumid2.textContent = 'Humidity: ' + humidity2 + ' %';
                    const cHumidParent2 = document.getElementById('humid2');
                    cHumidParent2.appendChild(chumid2);

                    const date3 = nextFiveDays[2];
                    const sky3 = cityWeatherDetails.list[3].weather[0].main;
                    const temp3 = cityWeatherDetails.list[3].main.temp;
                    const wind3 = cityWeatherDetails.list[3].wind.speed;
                    const humidity3 = cityWeatherDetails.list[3].main.humidity;
                    console.log(date3)
                    console.log(sky3);
                    console.log(temp3);
                    console.log(wind3);
                    console.log(humidity3);
                    const cdate3 = document.createElement('div');
                    cdate3.textContent = date3;
                    const cDateParent3 = document.getElementById('date3');
                    cDateParent3.appendChild(cdate3)
                    const csky3 = document.createElement('div');
                    csky3.textContent = 'Sky: ' + sky3;
                    const cSkyParent3 = document.getElementById('sky3');
                    cSkyParent3.appendChild(csky3);
                    const ctemp3 = document.createElement('div');
                    ctemp3.textContent = 'Temp: ' + temp3 + 'F';
                    const cTempParent3 = document.getElementById('temp3');
                    cTempParent3.appendChild(ctemp3);
                    const cwind3 = document.createElement('div');
                    cwind3.textContent = 'Wind Speed: ' + wind3 + ' MPH';
                    const cWindParent3 = document.getElementById('wind3');
                    cWindParent3.appendChild(cwind3);
                    const chumid3 = document.createElement('div');
                    chumid3.textContent = 'Humidity: ' + humidity3 + ' %';
                    const cHumidParent3 = document.getElementById('humid3');
                    cHumidParent3.appendChild(chumid3);

                    const date4 = nextFiveDays[3]
                    const sky4 = cityWeatherDetails.list[4].weather[0].main;
                    const temp4 = cityWeatherDetails.list[4].main.temp;
                    const wind4 = cityWeatherDetails.list[4].wind.speed;
                    const humidity4 = cityWeatherDetails.list[4].main.humidity;
                    console.log(date4);
                    console.log(sky4);
                    console.log(temp4);
                    console.log(wind4);
                    console.log(humidity4);
                    const cdate4 = document.createElement('div');
                    cdate4.textContent = date4;
                    const cDateParent4 = document.getElementById('date4');
                    cDateParent4.appendChild(cdate4);
                    const csky4 = document.createElement('div');
                    csky4.textContent = 'Sky: ' + sky4;
                    const cSkyParent4 = document.getElementById('sky4');
                    cSkyParent4.appendChild(csky4);
                    const ctemp4 = document.createElement('div');
                    ctemp4.textContent = 'Temp: ' + temp4 + 'F';
                    const cTempParent4 = document.getElementById('temp4');
                    cTempParent4.appendChild(ctemp4);
                    const cwind4 = document.createElement('div');
                    cwind4.textContent = 'Wind Speed: ' + wind4 + ' MPH';
                    const cWindParent4 = document.getElementById('wind4');
                    cWindParent4.appendChild(cwind4);
                    const chumid4 = document.createElement('div');
                    chumid4.textContent = 'Humidity: ' + humidity4 + ' %';
                    const cHumidParent4 = document.getElementById('humid4');
                    cHumidParent4.appendChild(chumid4);

                    const date5 = nextFiveDays[4];
                    const sky5 = cityWeatherDetails.list[5].weather[0].main;
                    const temp5 = cityWeatherDetails.list[5].main.temp;
                    const wind5 = cityWeatherDetails.list[5].wind.speed;
                    const humidity5 = cityWeatherDetails.list[5].main.humidity;
                    console.log(date5);
                    console.log(sky5);
                    console.log(temp5);
                    console.log(wind5);
                    console.log(humidity5);
                    const cdate5 = document.createElement('div');
                    cdate5.textContent = date5;
                    const cDateParent5 = document.getElementById('date5');
                    cDateParent5.appendChild(cdate5)
                    const csky5 = document.createElement('div');
                    csky5.textContent = 'Sky: ' + sky5;
                    const cSkyParent5 = document.getElementById('sky5');
                    cSkyParent5.appendChild(csky5);
                    const ctemp5 = document.createElement('div');
                    ctemp5.textContent = 'Temp: ' + temp5 + 'F';
                    const cTempParent5 = document.getElementById('temp5');
                    cTempParent5.appendChild(ctemp5);
                    const cwind5 = document.createElement('div');
                    cwind5.textContent = 'Wind Speed: ' + wind5 + ' MPH';
                    const cWindParent5 = document.getElementById('wind5');
                    cWindParent5.appendChild(cwind5);
                    const chumid5 = document.createElement('div');
                    chumid5.textContent = 'Humidity: ' + humidity4 + ' %';
                    const cHumidParent5 = document.getElementById('humid5');
                    cHumidParent5.appendChild(chumid5);
                })
        })
})
    .catch(error => {
        console.error('Error fetching data:', error);
    });

const atlanta = getElementById('atlanta');
atlanta.addEventListener('click', function (event) {

    event.preventDefault();
    let apiAtlantaUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=33.7488&lon=84.3877&appid=3897110e99b828b9b2fe21747b242046&units=imperial`;
    console.log(apiAtlantaUrl)
    fetch(apiAtlantaUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const today = dayjs().format();
            const cityWeatherDetails = data;
            const name = cityWeatherDetails.city.name;
            const sky = cityWeatherDetails.list[0].weather[0].main;
            const temp = cityWeatherDetails.list[0].main.temp;
            const wind = cityWeatherDetails.list[0].wind.speed;
            const humidity = cityWeatherDetails.list[0].main.humidity;
            console.log(name);
            console.log(sky);
            console.log(temp);
            console.log(wind);
            console.log(humidity);
            const cname = document.createElement('div');
            cname.textContent = name + ' (' + today + ')';
            const cNameParent = document.getElementById('cityd');
            cNameParent.appendChild(cname);
            const csky = document.createElement('div');
            csky.textContent = 'Sky: ' + sky;
            const cSkyParent = document.getElementById('skyd');
            cSkyParent.appendChild(csky);
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

            const sky1 = cityWeatherDetails.list[1].weather[0].main;
            const temp1 = cityWeatherDetails.list[1].main.temp;
            const wind1 = cityWeatherDetails.list[1].wind.speed;
            const humidity1 = cityWeatherDetails.list[1].main.humidity;
            console.log(sky1);
            console.log(temp1);
            console.log(wind1);
            console.log(humidity1);
            const csky1 = document.createElement('div');
            csky1.textContent = 'Sky: ' + sky1;
            const cSkyParent1 = document.getElementById('sky1');
            cSkyParent1.appendChild(csky1);
            const ctemp1 = document.createElement('div');
            ctemp1.textContent = 'Temp: ' + temp1 + 'F';
            const cTempParent1 = document.getElementById('temp1');
            cTempParent1.appendChild(ctemp1);
            const cwind1 = document.createElement('div');
            cwind1.textContent = 'Wind Speed: ' + wind1 + ' MPH';
            const cWindParent1 = document.getElementById('wind1');
            cWindParent1.appendChild(cwind1);
            const chumid1 = document.createElement('div');
            chumid1.textContent = 'Humidity: ' + humidity1 + ' %';
            const cHumidParent1 = document.getElementById('humid1');
            cHumidParent1.appendChild(chumid1);

            const sky2 = cityWeatherDetails.list[2].weather[0].main;
            const temp2 = cityWeatherDetails.list[2].main.temp;
            const wind2 = cityWeatherDetails.list[2].wind.speed;
            const humidity2 = cityWeatherDetails.list[2].main.humidity;
            console.log(sky2);
            console.log(temp2);
            console.log(wind2);
            console.log(humidity2);
            const csky2 = document.createElement('div');
            csky2.textContent = 'Sky: ' + sky2;
            const cSkyParent2 = document.getElementById('sky2');
            cSkyParent2.appendChild(csky2);
            const ctemp2 = document.createElement('div');
            ctemp2.textContent = 'Temp: ' + temp2 + 'F';
            const cTempParent2 = document.getElementById('temp2');
            cTempParent2.appendChild(ctemp2);
            const cwind2 = document.createElement('div');
            cwind2.textContent = 'Wind Speed: ' + wind2 + ' MPH';
            const cWindParent2 = document.getElementById('wind2');
            cWindParent2.appendChild(cwind2);
            const chumid2 = document.createElement('div');
            chumid2.textContent = 'Humidity: ' + humidity2 + ' %';
            const cHumidParent2 = document.getElementById('humid2');
            cHumidParent2.appendChild(chumid2);

            const sky3 = cityWeatherDetails.list[3].weather[0].main;
            const temp3 = cityWeatherDetails.list[3].main.temp;
            const wind3 = cityWeatherDetails.list[3].wind.speed;
            const humidity3 = cityWeatherDetails.list[3].main.humidity;
            console.log(sky3);
            console.log(temp3);
            console.log(wind3);
            console.log(humidity3);
            const csky3 = document.createElement('div');
            csky3.textContent = 'Sky: ' + sky3;
            const cSkyParent3 = document.getElementById('sky3');
            cSkyParent3.appendChild(csky3);
            const ctemp3 = document.createElement('div');
            ctemp3.textContent = 'Temp: ' + temp3 + 'F';
            const cTempParent3 = document.getElementById('temp3');
            cTempParent3.appendChild(ctemp3);
            const cwind3 = document.createElement('div');
            cwind3.textContent = 'Wind Speed: ' + wind3 + ' MPH';
            const cWindParent3 = document.getElementById('wind3');
            cWindParent3.appendChild(cwind3);
            const chumid3 = document.createElement('div');
            chumid3.textContent = 'Humidity: ' + humidity3 + ' %';
            const cHumidParent3 = document.getElementById('humid3');
            cHumidParent3.appendChild(chumid3);

            const sky4 = cityWeatherDetails.list[4].weather[0].main;
            const temp4 = cityWeatherDetails.list[4].main.temp;
            const wind4 = cityWeatherDetails.list[4].wind.speed;
            const humidity4 = cityWeatherDetails.list[4].main.humidity;
            console.log(sky4);
            console.log(temp4);
            console.log(wind4);
            console.log(humidity4);
            const csky4 = document.createElement('div');
            csky4.textContent = 'Sky: ' + sky4;
            const cSkyParent4 = document.getElementById('sky4');
            cSkyParent4.appendChild(csky4);
            const ctemp4 = document.createElement('div');
            ctemp4.textContent = 'Temp: ' + temp4 + 'F';
            const cTempParent4 = document.getElementById('temp4');
            cTempParent4.appendChild(ctemp4);
            const cwind4 = document.createElement('div');
            cwind4.textContent = 'Wind Speed: ' + wind4 + ' MPH';
            const cWindParent4 = document.getElementById('wind4');
            cWindParent4.appendChild(cwind4);
            const chumid4 = document.createElement('div');
            chumid4.textContent = 'Humidity: ' + humidity4 + ' %';
            const cHumidParent4 = document.getElementById('humid4');
            cHumidParent4.appendChild(chumid4);

            const sky5 = cityWeatherDetails.list[5].weather[0].main;
            const temp5 = cityWeatherDetails.list[5].main.temp;
            const wind5 = cityWeatherDetails.list[5].wind.speed;
            const humidity5 = cityWeatherDetails.list[5].main.humidity;
            console.log(sky5);
            console.log(temp5);
            console.log(wind5);
            console.log(humidity5);
            const csky5 = document.createElement('div');
            csky5.textContent = 'Sky: ' + sky5;
            const cSkyParent5 = document.getElementById('sky5');
            cSkyParent5.appendChild(csky5);
            const ctemp5 = document.createElement('div');
            ctemp5.textContent = 'Temp: ' + temp5 + 'F';
            const cTempParent5 = document.getElementById('temp5');
            cTempParent5.appendChild(ctemp5);
            const cwind5 = document.createElement('div');
            cwind5.textContent = 'Wind Speed: ' + wind5 + ' MPH';
            const cWindParent5 = document.getElementById('wind5');
            cWindParent5.appendChild(cwind5);
            const chumid5 = document.createElement('div');
            chumid5.textContent = 'Humidity: ' + humidity4 + ' %';
            const cHumidParent5 = document.getElementById('humid5');
            cHumidParent5.appendChild(chumid5);
        })
})    
