export const removeProduct = (itemIndex, localstorageData) => {
    // Remove the item from localstorageData
    localstorageData.splice(itemIndex, 1);

    // Update localStorage with the modified data
    localStorage.setItem("product", JSON.stringify(localstorageData));
    window.location.href = './cart.html';
}

