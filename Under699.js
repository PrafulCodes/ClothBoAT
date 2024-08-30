document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    let cardsLoaded = 0;
    const cardsPerLoad = 6;

    const defaultImages = [
        "https://www.hayclothing.in/cdn/shop/products/WhatsAppImage2023-03-25at5.36.03PM.jpg?v=1679753808&width=750",
        "https://www.hayclothing.in/cdn/shop/files/028b_10.jpg?v=1692438924&width=750",
        "https://www.hayclothing.in/cdn/shop/products/030_1.jpg?v=1679134381&width=750",
        "https://www.hayclothing.in/cdn/shop/files/028b_3.jpg?v=1694600682&width=750",
        "https://www.hayclothing.in/cdn/shop/products/WhatsAppImage2023-04-08at8.01.55PM.jpg?v=1681022129&width=750",
        "https://www.hayclothing.in/cdn/shop/products/175A7043.jpg?v=1674988269&width=750",
    ];

    const hoverImages = [
       "https://www.hayclothing.in/cdn/shop/products/WhatsAppImage2023-03-25at5.34.09PM.jpg?v=1679753808&width=750",
       "https://www.hayclothing.in/cdn/shop/files/028b_10.jpg?v=1692438924&width=750",
       "https://www.hayclothing.in/cdn/shop/products/030_7.jpg?v=1679134380&width=750",
       "https://www.hayclothing.in/cdn/shop/files/028b_1.jpg?v=1694600682&width=750",
       "https://www.hayclothing.in/cdn/shop/products/WhatsAppImage2023-04-08at8.01.54PM_1.jpg?v=1684514421&width=750",
       "https://www.hayclothing.in/cdn/shop/products/175A7034.jpg?v=1674988268&width=750",
    ];

    const productNames = [
        "Triangular Pyramid",
        "Jumping Shapes",
        "Dapple Dots",
        "Jumping Shapes",
        "Dangling Rose",
        "Lotus Delight",
    ];

    const productPrices = [
        688, 699, 599, 699, 599, 590
    ];

    function loadProducts() {
        for (let i = 0; i < cardsPerLoad; i++) {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.classList.add('cursor-pointer');

            const index = cardsLoaded % defaultImages.length;

            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${defaultImages[index]}" alt="Product ${cardsLoaded + 1}" class="default-image">
                    <img src="${hoverImages[index]}" alt="Product ${cardsLoaded + 1} Hover" class="hover-image">
                </div>
                <div class="product-info">
                    <h3>${productNames[cardsLoaded]}</h3>
                    <div class="price">₹${productPrices[cardsLoaded]}</div>
                    <div class="sizes">
                        <button class="size-btn">S</button>
                        <button class="size-btn">M</button>
                        <button class="size-btn">L</button>
                        <button class="size-btn">XL</button>
                        <button class="size-btn">XXL</button>
                    </div>
                </div>
            `;

            productsContainer.appendChild(productCard);
            cardsLoaded++;

            if (cardsLoaded >= productNames.length) {
                break;
            }
        }
    }

    loadProducts();
});