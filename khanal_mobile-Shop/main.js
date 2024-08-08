import { homeProductList } from "./HomeProduct.js";


// Define an asynchronous function to load products from a JSON file
async function loadProducts() {
    try {
        // Fetch the JSON file containing the product data
        const response = await fetch("./mobile-productApi.json");

        // Check if the response is not ok (status is not in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText); // Throw an error with the response status text
        }

        // Parse the JSON response to get the product list
        const productList = await response.json();

        // Call the homeProductList function with the product list
        homeProductList(productList);
    } catch (error) {
        // Catch and log any errors that occur during the fetch operation
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the loadProducts function to initiate the product loading process
loadProducts();

