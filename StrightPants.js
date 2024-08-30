document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    let cardsLoaded = 0;
    const cardsPerLoad = 6;

    const defaultImages = [
        "https://www.hayclothing.in/cdn/shop/files/IMG_7939.webp?v=1702549252&width=750",
        "https://www.hayclothing.in/cdn/shop/files/IMG_7973.webp?v=1702549910&width=750",
        "https://www.hayclothing.in/cdn/shop/files/IMG_8063.webp?v=1702549703&width=750",
        "https://www.hayclothing.in/cdn/shop/files/IMG_8005.webp?v=1702550822&width=750",
        "https://www.hayclothing.in/cdn/shop/files/IMG_8037.webp?v=1702550183&width=750",
        "https://www.hayclothing.in/cdn/shop/files/IMG_7980.webp?v=1702549909&width=750",
    ];

    const hoverImages = [
        "https://www.hayclothing.in/cdn/shop/files/IMG_7944.webp?v=1702549252&width=750",
        "https://www.hayclothing.in/cdn/shop/files/IMG_7978.webp?v=1702549909&width=750",
        "https://www.hayclothing.in/cdn/shop/files/IMG_8067.webp?v=1702549702&width=750",
        "https://www.hayclothing.in/cdn/shop/files/IMG_8010.webp?v=1702550821&width=750",
        "https://www.hayclothing.in/cdn/shop/files/IMG_8043.webp?v=1702550182&width=750",
        "https://www.hayclothing.in/cdn/shop/files/IMG_7992.webp?v=1702549910&width=750",
    ];

    const productNames = [
        "Shady Blooms",
        "Gray Straight Pant",
        "Cream Straight Pant",
        "White Straight Pant",
        "Skin Straight Pant",
        "Naughty Grey Pants"
    ];

    const productPrices = [
        799, 777, 999, 799, 799, 899,
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