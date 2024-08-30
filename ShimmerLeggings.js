document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    let cardsLoaded = 0;
    const cardsPerLoad = 6;

    const defaultImages = [
        "https://www.hayclothing.in/cdn/shop/files/1_51aa2475-84ed-4984-8bbe-95ed9e4826c1.jpg?v=1701511676&width=750",
        "https://www.hayclothing.in/cdn/shop/files/1_ab8fbd5b-9077-4242-8a2e-ae3be031653a.jpg?v=1701511769&width=750",
        "https://www.hayclothing.in/cdn/shop/files/1_b8fdd4a6-7583-4a24-8bd3-6b81be111cbc.jpg?v=1701511614&width=750",
        ];

    const hoverImages = [
        "https://www.hayclothing.in/cdn/shop/files/4_a7e71f23-d83d-4716-99cf-effb3d080182.jpg?v=1701511676&width=750",
        "https://www.hayclothing.in/cdn/shop/files/4_15359936-2c92-4915-8d1e-4f9dbbc10fbe.jpg?v=1701511771&width=750",
        "https://www.hayclothing.in/cdn/shop/files/4_29045503-e505-4ecb-8fa2-3b3ca5f86a4e.jpg?v=1702015309&width=750",
        ];

    const productNames = [
        "Gold Shimmer",
        "Silver Shimmer",
        "Copper Shimmer",
    
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