export const updateCart = (localstorage) => {

    let cart = document.querySelector(".icon");
    cart.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${localstorage.length}</i>`;
}