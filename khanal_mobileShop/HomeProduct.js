const template = document.querySelector(".product-template");
const displayTemplate = document.querySelector(".productContainer");

export const homeProductList = (product) => {
    if (!product) {
        console.log("Product not found");
        return;
    }

    product.forEach(item => {
        const { name, description, memory, memory1, image, stock } = item;
        const templateClone = document.importNode(template.content, true);
        templateClone.querySelector(".product-name").innerText = name;
        if (memory && memory1) {
            templateClone.querySelector(".memory-info").innerText = `${memory} :`;
            templateClone.querySelector(".memory-info1").innerText = `${memory1} :`;
        } else {
            templateClone.querySelector(".memory-info").innerText = `${memory} :`;
            templateClone.querySelector(".choose2").style.display = "none";
        }
        templateClone.querySelector(".product-available").innerText = `Total Stock: ${stock}`
        templateClone.querySelector(".description").innerText = description;

        displayTemplate.append(templateClone);
    });
}
