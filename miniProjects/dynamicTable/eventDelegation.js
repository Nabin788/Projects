let tableParent = document.getElementById("table-parent");

const tableItems = ((Identity, number) => {
    for (i = 1; i <= 30; i++) {
        let tableItems = document.createElement("div");
        tableItems.innerText = `elem${i}`
        tableItems.classList.add("table-Items");
        tableItems.setAttribute("data-name", Identity);
        tableItems.setAttribute("data-number", i);
        tableParent.append(tableItems);
    }
    return tableItems;

});
tableItems("element", );

const tableChild = ((event) => {
    let target = event.target;
    if (target.classList.contains("table-Items")) {
        let identiAtt = target.getAttribute("data-name");
        let numAtt = target.getAttribute("data-number");
        alert(`name: ${identiAtt} \n number: ${numAtt}`)
    }
});

tableParent.addEventListener("click", tableChild);