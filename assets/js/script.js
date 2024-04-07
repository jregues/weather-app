function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    const requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=35.227085&lon=-80.843124&appid=3897110e99b828b9b2fe21747b242046';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
           
        });
}


// fetchButton.addEventListener('click', getApi);

getApi();