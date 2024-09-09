// scripts.js
let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(({ item, price }) => {
        const li = document.createElement('li');
        li.textContent = `${item} - $${price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = `Total: $${total}`;
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    total = 0;
    updateCart();
}
