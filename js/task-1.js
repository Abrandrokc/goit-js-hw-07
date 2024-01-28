
const categoriesList = document.getElementById('categories');
const list = categoriesList.querySelectorAll('.item');
console.log(`Number of categorias: ${list.length}`);
list.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('ul li');
  console.log(`Categorias: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
