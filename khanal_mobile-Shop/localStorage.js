export const getItem = () => {
    let productItem = localStorage.getItem("product");
    if(!productItem){
        return[];
    }

    productItem = JSON.parse(productItem);
    return productItem;
}