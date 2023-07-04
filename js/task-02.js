const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const itemCreate = ingredients.map((ingredient) => {
  const itemElement = document.createElement('li');
  itemElement.textContent = ingredient;
  itemElement.classList.add('item');

  return itemElement;
});

ingredientsRef.append(...itemCreate);
  
  
