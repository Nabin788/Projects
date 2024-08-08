import { getItem } from "./localStorage.js";
import { updateCart } from "./updateCart.js";
let localstorage = getItem();

export const addTocart = (event, id, stock, price, price1, memory, memory1, name, image) => {

    // Select the product card with the specific id
    let currentId = document.querySelector(`#card${id}`);
    let quantity = currentId.querySelector(".quantity-number").textContent;



    if (memory && memory1) {
        price = price.replace(/,/g, '');
        price1 = price1.replace(/,/g, '');
        let checkBox = currentId.querySelector("#ram");
        let checkBox1 = currentId.querySelector("#ram1");

        const check = () => {
            if (checkBox.checked) {
                price = price * quantity;
                localstorage.push({ id, price, quantity, memory, name, image });
                localStorage.setItem("product", JSON.stringify(localstorage));
                updateCart(localstorage);
            }
        }

        const check1 = () => {
            if (checkBox1.checked) {
                price1 = price1 * quantity;
                localstorage.push({ id, price1, quantity, memory1, name, image });
                localStorage.setItem("product", JSON.stringify(localstorage));
                updateCart(localstorage);
            }
        }

        checkBox.addEventListener("click", check());
        checkBox1.addEventListener("click", check1());

    } else {
        price = price.replace(/,/g, '');
        price = price * quantity;
        localstorage.push({ id, price, quantity, memory, name, image })
        localStorage.setItem("product", JSON.stringify(localstorage));
        updateCart(localstorage);
    }
}
updateCart(localstorage);

