document.getElementById('getDataButton').addEventListener('click', getData);

function getData() {
    fetch('https://api.nasa.gov/planetary/apod?date=2019-07-11&api_key=DEMO_KEY')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                    const name = data.title
                    const date = data.date
                    const copyright = data.copyright
                    const description = data.explanation
                    const picture_url = data.url

                    document.getElementById("name").append(name);
                    document.getElementById("date").append(date);
                    document.getElementById("copyright").append(copyright);
                    document.getElementById("description").append(description);
                    document.getElementById("picture").src = picture_url;
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function getTodayImage() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                    const name = data.title
                    const date = data.date
                    const copyright = data.copyright
                    const description = data.explanation
                    const picture_url = data.url

                    document.getElementById("name").append(name);
                    document.getElementById("date").append(date);
                    document.getElementById("copyright").append(copyright);
                    document.getElementById("description").append(description);
                    document.getElementById("picture").src = picture_url;
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

