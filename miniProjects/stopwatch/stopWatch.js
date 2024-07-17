// ! Taking reference of HTML elements
let timeNumber = document.getElementById("stopWatch_number");
let startButton = document.querySelector(".start_btn");
let resetButton = document.querySelector(".reset_btn");
let stopButton = document.querySelector(".stop_btn");
let getButton = document.querySelector(".getTime_btn");
let recordInformation = document.querySelector("#record");

// ? Define count = 0 to start the number from 0
let count = 0;
let interval;

// ? Create function to count number from 0 using setInterval() method
const countNumber = (() => {
    // * Store the setInterval in universal interval
    interval = setInterval(() => {
        // * It will increase the number
        let number = count++;
        // * It will place and display the increased number
        timeNumber.textContent = `${number}`;
        // * To check the operation works or not
        console.log(number);
        // * 1000 is 1 sec, it will count the number every second
    }, 1000);
});

// ? Function to start when the user clicks the start button
const startTimer = (() => {
    if (!interval) {
        //* Calling the function
        countNumber();
    }
});

// ?Function to stop the setInterval after clicking on the stop button
const stopTimer = (() => {
    //* It will stop the timer
    clearInterval(interval);
    interval = null;
});

// ? Function to reset the timer to 0 after clicking on the reset button
const resetTimer = (() => {
    // * It will clear the setInterval
    clearInterval(interval);
    interval = null;
    count = 0;
    timeNumber.textContent = `${count}`;
});


// ? function to get the current timer value and display it in the record section
const getTimer = (() => {
    // * create a elemetn p 
    let createElement = document.createElement("p");

    // * set the text content of the paragraph to the current timer value
    let getData = createElement.textContent = `The current secound time is: ${count}`;

    // * append the new paragraph to the recordInformation element
    recordInformation.append(createElement);

    // *Creating a clear click event to clear the information from list
    let clearButton = document.getElementById("clearTime_btn");
    clearButton.addEventListener("click", () => {
        createElement.remove();

    });
});



// ?Create event listeners for the click button to start
startButton.addEventListener("click", startTimer);

// ? Create the click event to stop
stopButton.addEventListener("click", stopTimer);

// ? Create the click event to reset
resetButton.addEventListener("click", resetTimer);

// ? Create the click event to getTimer data
getButton.addEventListener("click", getTimer);
