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
        const productImage = product.querySelector('img').src;

        // Create an object representing the selected item
        const newItem = {
            name: productName,
            price: productPrice,
            image: productImage
        };

        // Add the item to the selected items array (or you can implement this functionality)
        addToCart(newItem);

        // Redirect to the shopping cart page
        window.location.href = 'shopping-cart.html';
    });
});

function addToCart(item) {
    // Implement adding product to the shopping cart or selected items array
    console.log(`Added ${item.name} to the shopping cart.`);
}


