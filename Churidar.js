document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    let cardsLoaded = 0;
    const cardsPerLoad = 6;

    const defaultImages = [
        "https://www.hayclothing.in/cdn/shop/files/1_1.jpg?v=1696675940&width=750",
        "https://www.hayclothing.in/cdn/shop/products/1_95c73404-2b17-4a93-a406-4915c4d3a29f.jpg?v=1643877895&width=750",
        "https://www.hayclothing.in/cdn/shop/products/1_496a717a-e305-4005-bab7-6d1a2aff2642.jpg?v=1644040619&width=750",
        "https://www.hayclothing.in/cdn/shop/products/1_d6d0967d-d0fb-4bac-96f3-63a951a091bb.jpg?v=1643982344&width=750",
        "https://www.hayclothing.in/cdn/shop/products/1_6d754ac2-4c54-4533-9995-f8b78c62d56f.jpg?v=1643788355&width=750",
        "https://www.hayclothing.in/cdn/shop/products/1_7e236adb-f6dd-4401-bcc9-df8dbe423026.jpg?v=1644040831&width=750"
    ];

    const hoverImages = [
        "https://www.hayclothing.in/cdn/shop/files/4_1.jpg?v=1696675940&width=750",
        "https://www.hayclothing.in/cdn/shop/products/4_8d4cb9e7-7d67-442e-99f2-b568265bb86f.jpg?v=1643877895&width=750",
        "https://www.hayclothing.in/cdn/shop/products/4_7c343451-a410-4611-93bb-8165898ce331.jpg?v=1644040619&width=750",
        "https://www.hayclothing.in/cdn/shop/products/4_2ab59264-48c4-4abf-a669-09eef8e87a32.jpg?v=1643982344&width=750",
        "https://www.hayclothing.in/cdn/shop/products/4_686be69b-640e-4520-b596-032737ddd546.jpg?v=1643788355&width=750",
        "https://www.hayclothing.in/cdn/shop/products/4_610aec12-56ac-4e87-a787-185519e7453f.jpg?v=1644040831&width=750"
    ];

    const productNames = [
        "Steel Gray Churidar",
        "Peach churidar",
        "White churidar",
        "Lavender churidar",
        "Black churidar",
        "Rani Pink churidar"
    ];

    const productPrices = [
        499, 499, 499, 499, 499, 999
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