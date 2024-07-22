const api = "https://icanhazdadjoke.com/";
const button = document.getElementById("fetch-joke");
const apiData = document.querySelector(".jokes-api");

// ? fetch and setTimeout is asyn function itselft but to used await we have to declare async
const fetchApi = (async () => {
    try {
        let apiRes = await fetch(api, {
            headers: { Accept: "application/json" }
        });
        const data = await apiRes.json();
        apiData.textContent = `${data.joke}`
    } catch (error) {
        console.log(error);
        apiData.textContent = `AOI from ${api} not found`
    }

});

button.addEventListener("click", fetchApi);