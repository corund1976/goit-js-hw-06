const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liItems = ingredients.map(ingredient => {
  const liItem = document.createElement("li");
  liItem.classList.add('item');
  liItem.textContent = ingredient;
  return liItem;
});
  
const ulIngr = document.querySelector('#ingredients');
ulIngr.append(...liItems);