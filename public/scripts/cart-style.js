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

const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get product details
        const product = button.closest('.product');
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;

        // Add product to shopping cart (you can implement this functionality)
        addToCart(productName, productPrice);
    });
});

function addToCart(name, price) {
    // Implement adding product to the shopping cart
    console.log(`Added ${name} to the shopping cart.`);
}


