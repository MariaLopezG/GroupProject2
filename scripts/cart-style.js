const categoryButtons = document.querySelectorAll('.category-button');
const products = document.querySelectorAll('.product');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.getAttribute('data-category');

        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            if (selectedCategory === 'all' || selectedCategory === productCategory) {
                product.style.display = 'block'; // Show product
            } else {
                product.style.display = 'none'; // Hide product
            }
        });

        // Toggle active class on category buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
