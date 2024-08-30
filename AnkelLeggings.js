document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    let cardsLoaded = 0;
    const cardsPerLoad = 6;

    const defaultImages = [
        "https://www.hayclothing.in/cdn/shop/products/1_43d0057c-80a7-4a11-be5d-9284b8f6e53f.jpg?v=1643788300&width=750",
        "https://www.hayclothing.in/cdn/shop/files/1_a3d18583-63e2-4d41-8936-2ab0cfc093b9.jpg?v=1694784808&width=750",
        "https://www.hayclothing.in/cdn/shop/products/2_4026c32a-3f83-4f8f-b76b-9f852444fef0.jpg?v=1642416383&width=750",
        "https://www.hayclothing.in/cdn/shop/products/1_78bb8306-bceb-467b-a7c3-e71deb028d61.jpg?v=1643790019&width=750",
        "https://www.hayclothing.in/cdn/shop/products/1_c64cab70-8625-4a03-bfc5-05cd2d04e296.jpg?v=1643980472&width=750",
        "https://www.hayclothing.in/cdn/shop/products/1_8199de3c-11a4-4295-9763-2c3b4a52924e.jpg?v=1643978171&width=750"
    ];

    const hoverImages = [
        "https://www.hayclothing.in/cdn/shop/products/4_eba6188b-19e9-448f-82f1-91434a701748.jpg?v=1643788300&width=750",
        "https://www.hayclothing.in/cdn/shop/files/4_ede202bd-7b76-4447-9465-c8bbe063dae8.jpg?v=1694784807&width=750",
        "https://www.hayclothing.in/cdn/shop/products/4_e02cd650-e69a-4f82-899c-0b7ba2ac94cc.jpg?v=1643787755&width=750",
        "https://www.hayclothing.in/cdn/shop/products/4_adf83e64-59fe-46b4-8c86-5a6f7a704ff2.jpg?v=1643790019&width=750",
        "https://www.hayclothing.in/cdn/shop/products/4_e21797b7-7ad4-4e8e-90e9-4232cd3fce98.jpg?v=1643980471&width=750",
        "https://www.hayclothing.in/cdn/shop/products/4_51ea2777-cef7-4064-a411-f8d20ee2bb67.jpg?v=1643978171&width=750"
    ];

    const productNames = [
        "Shady Blooms",
        "Leaf and DayLight",
        "Oh! Flamingo",
        "Happy Buds",
        "OutBlooms",
        "Green Forest"
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