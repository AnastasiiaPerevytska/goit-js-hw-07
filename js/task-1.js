const itemsList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${itemsList.length}`);
itemsList.forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
