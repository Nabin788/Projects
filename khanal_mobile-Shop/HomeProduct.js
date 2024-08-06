// ! Select the template element for the product cards from the DOM
const template = document.querySelector(".product-template");

// ! Select the container where the product cards will be displayed
const displayTemplate = document.querySelector(".productContainer");

// ! Import the productQuantityToggle function from another module
import { productQuantityToggle } from "./productQuantity.js";

// ! Import the addtocart function from another module
import { addTocart } from "./addTo-cart.js";

// ? Export the homeProductList function which takes a product array as an argument
export const homeProductList = (product) => {

    // * Check if the product array is not defined or empty
    if (!product) {
        console.log("Product not found");
        return; // Exit the function if no products are found
    }

    // * Iterate over each product in the array
    product.forEach(item => {
        // Destructure properties from the product item
        const { name, description, memory, memory1, image, id, stock, price, price1 } = item;

        // Clone the template content to create a new product card
        const templateClone = document.importNode(template.content, true);

        // Set a unique ID for the card element
        templateClone.querySelector("#card").setAttribute("id", `card${id}`);

        // Set the product name in the template
        templateClone.querySelector(".product-name").innerText = name;

        // Check if both memory and memory1 are available
        if (memory && memory1) {
            templateClone.querySelector(".memory-info").innerText = `${memory} :`;
            templateClone.querySelector(".memory-info1").innerText = `${memory1} :`;
        } else {
            // If only one memory option is available, hide the second memory option element
            templateClone.querySelector(".memory-info").innerText = `${memory} :`;
            templateClone.querySelector(".choose2").style.display = "none";
            templateClone.querySelector(".choose-memory").style.display = "none";
        }

        // Set the total stock information in the template
        templateClone.querySelector(".product-available").innerText = `Total Stock: ${stock}`;

        // Set the product image in the template
        templateClone.querySelector(".img").src = image;

        // Set the product description in the template
        templateClone.querySelector(".description").innerText = description;

        // Select the quantity toggle element
        let quantityToggle = templateClone.querySelector(".quantity");

        // Add an event listener to handle quantity changes
        quantityToggle.addEventListener("click", (event) => {
            productQuantityToggle(event, id, stock);
        });

        // Add to cart
        templateClone.querySelector(".addButton").addEventListener("click", (event) => {
            addTocart(event, id, stock, price, price1, memory, memory1);
        })

        // Append the cloned template to the display container
        displayTemplate.append(templateClone);
    });
}
