const api = "https://icanhazdadjoke.com/";
let buttonApi = document.getElementById("fetch-joke");
let jokeData = document.querySelector(".jokes-api");

const jokeApi = (() => {
    // * : This performs an HTTP GET request to the API. The headers object specifies that you want the response in JSON format.
    fetch(api, {
        headers: { Accept: "application/json" }
    }).then((res) => {
        // it will get json data because api is in a formate of json
        return res.json();
    }).then((data) => {
        console.log(data.joke);
        jokeData.textContent = `${data.joke}`
    }).catch((err) => {
        jokeData.textContent = `failed to fetch the api from: ${api}`;
    })
})

buttonApi.addEventListener("click", jokeApi)

