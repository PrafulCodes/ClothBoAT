document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    let cardsLoaded = 0;
    const cardsPerLoad = 6;

    const defaultImages = [
        "https://www.hayclothing.in/cdn/shop/products/1_761417f6-f5ba-48f9-8fd7-6d3781c1a9ff.jpg?v=1643884970&width=750",
        "https://www.hayclothing.in/cdn/shop/products/1_8883efeb-b60d-43e7-854b-5d24b14a8e12.jpg?v=1643885024&width=750",
        "https://www.hayclothing.in/cdn/shop/products/1_0a29a4fb-c263-446d-9ee2-9f29820261f8.jpg?v=1644241490&width=750",
        ];

    const hoverImages = [
        "https://www.hayclothing.in/cdn/shop/products/4_28600aa6-82c5-4fad-a396-66251289c329.jpg?v=1643884971&width=750",
        "https://www.hayclothing.in/cdn/shop/products/4_b1394b63-6551-4481-97c0-b04cbe45fbd7.jpg?v=1643885024&width=750",
        "https://www.hayclothing.in/cdn/shop/products/4_31d3031f-0f2c-484f-bf9d-bdbeccd63046.jpg?v=1644241490&width=750",
        ];

    const productNames = [
        "Rani Pink Harem",
        "Turquoise Harem",
        "Apricot Harem",
    
    ];

    const productPrices = [
        699, 699, 699, 
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