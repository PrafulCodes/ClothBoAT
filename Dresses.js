document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    let cardsLoaded = 0;
    const cardsPerLoad = 6;

    const defaultImages = [
        "https://www.hayclothing.in/cdn/shop/files/DSC05236_1.webp?v=1724148316&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04486.webp?v=1724150415&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04085.webp?v=1724152941&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04275.webp?v=1724154711&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC03287.png?v=1720604800&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC03966.webp?v=1718705797&width=750"
    ];

    const hoverImages = [
        "https://www.hayclothing.in/cdn/shop/files/DSC05284.webp?v=1724148316&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04489.webp?v=1724150415&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04063.webp?v=1724152940&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04274.webp?v=1724154711&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC03315.png?v=1720604800&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC03883.webp?v=1718705797&width=750"
    ];

    const productNames = [
        "Flowers Everywhere",
        "Ocean Tints",
        "Random Collage",
        "Tranquil Bloom",
        "Leaf Garden",
        "Shady Blooms"
    ];

    const productPrices = [
        1299, 1299, 1199, 1299, 999, 999
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