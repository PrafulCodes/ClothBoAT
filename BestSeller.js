document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    let cardsLoaded = 0;
    const cardsPerLoad = 6;

    const defaultImages = [
        "https://www.hayclothing.in/cdn/shop/files/DSC03287.png?v=1720604800&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC03090.png?v=1720608660&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04272.png?v=1720609327&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC05499_1.webp?v=1712218024&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC05814.webp?v=1712219232&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC05946_1.png?v=1720608047&width=750",
    ];

    const hoverImages = [
        "https://www.hayclothing.in/cdn/shop/files/DSC03290.png?v=1720604800&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC03092.png?v=1720608660&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04217.png?v=1720609327&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC05513.webp?v=1712218025&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC05764.webp?v=1712219227&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC05863_1.png?v=1720608048&width=750",
    ];

    const productNames = [
        "Leaf Garden",
        "Fresh Foliage",
        "Black Blush",
        "Cupids Heart",
        "Dreamy Shapes",
        "Floral Damask"
    ];

    const productPrices = [
        850, 999, 899, 99, 1399, 999
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