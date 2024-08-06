// Export the productQuantityToggle function which handles the increment and decrement of product quantities
export const productQuantityToggle = (event, id, stock) => {
    // Get the target element from the event
    let target = event.target;

    // Select the product card with the specific id
    let currentId = document.querySelector(`#card${id}`);

    // Select the element that displays the product quantity
    let productQuantity = currentId.querySelector(".quantity-number");

    // Get the current quantity from the data-quantity attribute, default to 1 if not set
    let count = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
    // console.log(count); // Log the current count for debugging purposes

    // If the increment button was clicked and the current quantity is less than the stock
    if (target.classList.contains("increment") && currentId) {
        if (count < stock) {
            count = count + 1; // Increment the quantity
        }
        // If the decrement button was clicked and the current quantity is greater than 1
    } else if (target.classList.contains("decrement")) {
        if (count > 1) {
            count = count - 1; // Decrement the quantity
        }
    }

    // Update the displayed quantity with the new count
    productQuantity.innerText = count;

    // Update the data-quantity attribute with the new count
    productQuantity.setAttribute("data-quantity", count.toString());

    // Return the new count
    return count;
}
