
const categoriesList = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${categoriesList}`);

const itemCategories = document.querySelectorAll('.item');

itemCategories.forEach(item => {
  const itemTitle = item.firstElementChild.textContent;
  const listItem = item.querySelectorAll('li').length;
  console.log(`Category: ${itemTitle} Elements: ${listItem}`);
});




