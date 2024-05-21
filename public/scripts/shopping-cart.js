// scripts/cart.js

// Retrieve selected items from storage (you need to implement this functionality)
const selectedItems = []; // Get selected items from storage

// Display selected items in the cart section
const cartItemsSection = document.querySelector('.cart-items');

selectedItems.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        </div>
    `;
    cartItemsSection.appendChild(cartItem);
});
