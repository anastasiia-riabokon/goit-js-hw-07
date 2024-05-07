const categoriesList = document.getElementById('categories');

const categoryItem = categoriesList.querySelectorAll('.item');

const qtyCategoryItem = `Number of categories: ${categoryItem.length}`;

console.log(qtyCategoryItem);

categoryItem.forEach(li => {
  const subtitle = li.querySelector('h2').textContent;
  console.log(`Category: ${subtitle}`);
  const gtyElements = li.querySelectorAll('li').length;
  console.log(`Elements: ${gtyElements}`);
});
