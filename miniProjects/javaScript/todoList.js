// ! Taking reference from html element
let inputField = document.getElementById("input");
let addButton = document.getElementById("btn1");
let section = document.querySelector(".items-list");

// ? Function to get the data from localStorage
const getLocalStorageData = () => {
    // * Retrieve data by key from localStorage and parse back to original data
    return JSON.parse(localStorage.getItem("Todo List"));
};

// ? Initialize arrayData with data from localStorage or an empty array
let arrayData = getLocalStorageData() || [];

// ? Function to dynamically display list elements on the page
const displayElement = (element) => {
    // * Create a div element
    let createDiv = document.createElement("div");
    // * Populate the div with an li and delete button
    createDiv.innerHTML = `<li>${element}</li> <button class="btn2-style">Delete</button>`;
    // * Append the div to the section
    section.append(createDiv);

    // * Reference the delete button within the newly created div
    let deleteButton = createDiv.querySelector(".btn2-style");
    // * Attach a click event to the delete button
    deleteButton.addEventListener("click", () => {
        // * Remove the div from the DOM upon button click
        createDiv.remove();
        // * Remove the corresponding item from arrayData
        arrayData = arrayData.filter(item => item !== element);
        // * Update localStorage with the modified arrayData
        localStorage.setItem("Todo List", JSON.stringify(arrayData));
    });
};

// ? Function to display list items from localStorage on page load
const showDisplayList = () => {
    // * Log arrayData to console to verify contents
    console.log(arrayData);
    // * Iterate through arrayData and display each element
    arrayData.forEach((element) => {
        displayElement(element);
    });
};

// ? Function to handle button click event
const addButtonFunction = () => {
    // * Trim whitespace from input field value
    let inputData = inputField.value.trim();

    // * Check if input field is not empty
    if (inputField.value !== "") {
        // * Add inputData to arrayData
        arrayData.push(inputData);
        // * Ensure arrayData contains unique values
        arrayData = [...new Set(arrayData)];
        // * Log arrayData to console to verify uniqueness
        console.log(arrayData);
        // * Update localStorage with updated arrayData
        localStorage.setItem("Todo List", JSON.stringify(arrayData));

        //*  Create a div element
        let createDiv = document.createElement("div");
        // * Populate the div with an li and delete button
        createDiv.innerHTML = `<li>${inputField.value}</li> <button class="btn2-style">Delete</button>`;
        //*  Append the div to the section
        section.append(createDiv);

        // * Clear the input field value after adding to list
        inputField.value = "";

        // *Reference the delete button within the newly created div
        let deleteButton = createDiv.querySelector(".btn2-style");
        //*  Attach a click event to the delete button
        deleteButton.addEventListener("click", () => {
            // * Remove the div from the DOM upon button click
            createDiv.remove();
            // * Remove the corresponding item from arrayData
            arrayData = arrayData.filter(item => item !== inputData);
            //*  Update localStorage with the modified arrayData
            localStorage.setItem("Todo List", JSON.stringify(arrayData));
        });
    }
};

// * Display items from localStorage on page load
showDisplayList();

// ? Attach addButtonFunction to click event of addButton
addButton.addEventListener("click", addButtonFunction);