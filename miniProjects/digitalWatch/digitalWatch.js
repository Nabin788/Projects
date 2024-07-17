// ! taking reference
let pElement = document.querySelector(".paragraph");

// ? creating function for time
const time = (() => {
    // * store date in a variable times
    let times = new Date();
    // * place variable time to paragraph element by extracting only local time
    pElement.textContent = times.toLocaleTimeString();
});
// ? set the time interval to continuously display time by every 1 secounds by calling time function
setInterval(time, 1000);