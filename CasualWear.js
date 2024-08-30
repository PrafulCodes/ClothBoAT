document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    let cardsLoaded = 0;
    const cardsPerLoad = 6;

    const defaultImages = [
        "https://www.hayclothing.in/cdn/shop/files/DSC05236_1.webp?v=1724148316&width=750",
        "https://www.hayclothing.in/cdn/shop/products/692_2_334957f7-b099-433d-9bf7-109d8f19e8b4.jpg?v=1679402079&width=750",
        "https://www.hayclothing.in/cdn/shop/files/STA06914.webp?v=1706007519&width=750",
        "https://www.hayclothing.in/cdn/shop/products/WhatsAppImage2023-04-08at8.01.55PM.jpg?v=1681022129&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC03287.png?v=1720604800&width=750",
        "https://www.hayclothing.in/cdn/shop/files/Instagram_post_-_8.png?v=1724578104&width=750"
    ];

    const hoverImages = [
        "https://www.hayclothing.in/cdn/shop/files/DSC05284.webp?v=1724148316&width=750",
        "https://www.hayclothing.in/cdn/shop/products/692_3_89a608b5-4475-45dd-82be-6311eb94246e.jpg?v=1679402080&width=750",
        "https://www.hayclothing.in/cdn/shop/files/STA06916.webp?v=1706007518&width=750",
        "https://www.hayclothing.in/cdn/shop/products/WhatsAppImage2023-04-08at8.01.51PM.jpg?v=1684514421&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC03290.png?v=1720604800&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04051_2.webp?v=1724153872&width=750"
    ];

    const productNames = [
        "Flowers Everywhere",
        "OMarigold Hush",
        "Swan Quince",
        "Dangling Rose",
        "Leaf Garden",
        "Red Heart Story"
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