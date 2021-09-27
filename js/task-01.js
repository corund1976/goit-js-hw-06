const liItems = document.querySelectorAll('.item')

console.log('Number of categories:', liItems.length);
console.log("");

liItems.forEach(item => {
    console.log('Category:', item.querySelector("h2").textContent);
    console.log('Elements:', item.querySelectorAll("li").length);
    console.log("");
});