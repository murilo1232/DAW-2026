const categoryLinks = document.querySelectorAll('nav a');

console.log(categoryLinks);
console.log('Category Links');

categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const categoryName = link.textContent;

        selectedCategory.textContent = categoryName;

        alert('Categoria selecionada: ' + categoryName);

        categoryLinks.forEach(function(categoryLink) {
            categoryLink.classList.remove('active');
        });
        link.classList.add('active');
    });
});