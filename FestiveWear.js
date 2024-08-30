document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    let cardsLoaded = 0;
    const cardsPerLoad = 6;

    const defaultImages = [
        "https://www.hayclothing.in/cdn/shop/files/DSC00773.webp?v=1701760658&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC00230.webp?v=1699151827&width=750",
        "https://www.hayclothing.in/cdn/shop/products/677a_5_a015fafe-f2a9-4888-8aee-96b8c0dbc15f.jpg?v=1679403554&width=750",
        "https://www.hayclothing.in/cdn/shop/products/705_7.jpg?v=1669378041&width=750",
        "https://www.hayclothing.in/cdn/shop/files/719_3.webp?v=1689943084&width=750",
        "https://www.hayclothing.in/cdn/shop/products/175A3063_60a71ff1-7b2b-4568-8716-bbea8a018093.jpg?v=1679564632&width=750"
    ];

    const hoverImages = [
        "https://www.hayclothing.in/cdn/shop/files/DSC00601.webp?v=1701760658&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC00234.webp?v=1699151827&width=750",
        "https://www.hayclothing.in/cdn/shop/products/677a_1_9a3be7ef-e3cd-4d78-b157-aed28624aaee.jpg?v=1679403554&width=750",
        "https://www.hayclothing.in/cdn/shop/products/705_1.jpg?v=1669378041&width=750",
        "https://www.hayclothing.in/cdn/shop/files/719_1.webp?v=1689943084&width=750",
        "https://www.hayclothing.in/cdn/shop/products/175A3039_9c531d71-c759-4718-9006-89af8077e03c.jpg?v=1679564632&width=750"
    ];

    const productNames = [
        "Elegant gold",
        "Frosted Gold Star",
        "Golden Mystery",
        "ART PETAL",
        "Golden Blossom",
        "CROWNS AND DIAMONDS"
    ];

    const productPrices = [
        1499, 1499, 1399, 1499, 1399, 999
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