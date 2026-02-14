document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: "Laptop", price: 999.99 },
        { id: 2, name: "Smartphone", price: 599.99 },
        { id: 3, name: "Headphones", price: 149.99 },
        { id: 4, name: "Tablet", price: 399.99 },
        { id: 5, name: "Charger", price: 109.99 }
    ];

    const cart = [];

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const totalPrice = document.getElementById("total-price");
    const checkBtn = document.getElementById("checkout-btn");

    // Render products dynamically
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
            </div>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;

        productList.appendChild(productDiv);
    });

    // Add to cart event (event delegation)
    productList.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const prodId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find(p => p.id === prodId);
            addToCart(product);
        }
    });

    function addToCart(product) {
        cart.push(product);
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            cartItems.innerHTML = "<p>Your cart is empty.</p>";
            cartTotal.classList.add("hidden");
            return;
        }

        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <p>${item.name} - $${item.price.toFixed(2)}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            cartItems.appendChild(itemDiv);

            total += item.price;
        });

        totalPrice.textContent = `$${total.toFixed(2)}`;
        cartTotal.classList.remove("hidden");
    }

    // Remove item (event delegation)
    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains("remove-btn")) {
            const index = parseInt(e.target.getAttribute("data-index"));
            cart.splice(index, 1);
            renderCart(); // for updating total..
        }
    });

    // Checkout button
    checkBtn.addEventListener('click', () => {
        if(cart.length === 0){
            alert("Your cart is empty!");
        } else {
            alert("Checkout successfully!");
            cart.length = 0; // Clear cart
            renderCart();
        }
    });

});
