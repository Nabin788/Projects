import { getItem } from "./localStorage.js";
import { updateCart } from "./updateCart.js";
import { removeProduct } from "./cartFunction.js";


let localstorageData = getItem();

const showCart = () => {
    localstorageData.map((currEl, index) => {

        let productTemplate = document.querySelector(".product-section");
        let productContainer = document.querySelector("#product-container");
        let cloneTemplate = document.importNode(productTemplate.content, true);
        let removeBtn = cloneTemplate.querySelector(".rmbtn");

        updateCart(localstorageData);
        // console.log(localstorageData);

        let { id, name, image, price, price1, memory, memory1, quantity } = currEl;


        if (memory) {
            cloneTemplate.querySelector(".product-name").innerText = name;
            cloneTemplate.querySelector(".img1").src = image;
            cloneTemplate.querySelector(".price").innerText = `Rs. ${price}`
            cloneTemplate.querySelector(".price1").style.display = "none"
            cloneTemplate.querySelector(".quantity-number").innerText = quantity;
        } else if (memory1) {
            cloneTemplate.querySelector(".product-name").innerText = name;
            cloneTemplate.querySelector(".img1").src = image;
            cloneTemplate.querySelector(".price1").innerText = `Rs. ${price1}`
            cloneTemplate.querySelector(".price").style.display = "none"
            cloneTemplate.querySelector(".quantity-number").innerText = quantity;
        }

        let setId = cloneTemplate.querySelector(".product-container");
        setId.setAttribute("id", `${index}`);

        removeBtn.addEventListener("click", () => {
            removeProduct(index, localstorageData);
            updateCart(localstorageData);
        });

        productContainer.append(cloneTemplate);
    });
}
showCart();
