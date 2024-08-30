document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    const footer = document.querySelector('.footer');
    const loadingIndicator = document.querySelector('.loading-indicator');
    let loading = false;
    let cardsLoaded = 0;
    const cardsPerLoad = 6;
    const maxCards = 42;

    const defaultImages = [
        "https://www.hayclothing.in/cdn/shop/files/DSC03862.webp?v=1718705797&width=1780",
        "https://www.hayclothing.in/cdn/shop/files/DSC04388.webp?v=1718706770&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC05034.webp?v=1718709309&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04560.webp?v=1718709833&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04645.webp?v=1718710709&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC03383.webp?v=1718711352&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04832.webp?v=1718449855&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC09573_e9bc3d87-f791-4c59-a21e-c6d1dd7303e0.webp?v=1717149631&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC07370_1.webp?v=1709809602&width=750"
    ];

    const hoverImages = [
        "https://www.hayclothing.in/cdn/shop/files/DSC03966.webp?v=1718705797&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04350.webp?v=1718706770&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC05189.webp?v=1718709309&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04565.webp?v=1718709833&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04624.webp?v=1719031771&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC03416.webp?v=1718711352&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC04851.webp?v=1718449855&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC09475.webp?v=1717149631&width=750",
        "https://www.hayclothing.in/cdn/shop/files/DSC07419.webp?v=1709809601&width=750"
    ];

    const productNames = [
        "Shady Blooms",
        "Leaf and DayLight",
        "Oh! Flamingo",
        "Happy Buds",
        "OutBlooms",
        "Green Forest",
        "Into The Woods",
        "Canvas Of Prism",
        "Into The Blossom"
    ];

    const productPrices = [
        1299, 1299, 1199, 1299, 999, 999, 999, 1499, 999
    ];

    function lazyLoad() {
        if (loading) return;

        const { scrollTop, clientHeight } = document.documentElement;
        const footerOffset = footer.offsetTop;
        const scrollBottom = scrollTop + clientHeight;

        if (scrollBottom >= footerOffset) {
            showLoadingIndicator();
            loadMoreProducts();
        }
    }

    function loadMoreProducts() {
        if (cardsLoaded >= maxCards) {
            window.removeEventListener('scroll', lazyLoad);
            hideLoadingIndicator();
            return;
        }

        loading = true;
        const remainingCards = maxCards - cardsLoaded;
        const batchLimit = Math.min(cardsPerLoad, remainingCards);

        setTimeout(() => {
            for (let i = 0; i < batchLimit; i++) {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                const index = cardsLoaded % defaultImages.length;

                if (cardsLoaded < productNames.length) {
                    productCard.classList.add('cursor-pointer');
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
                } else {
                    productCard.innerHTML = `
                        <div class="product-image">
                            <img src="placeholder-image.jpg" alt="Product Not Available" class="default-image">
                            <img src="placeholder-image.jpg" alt="Product Not Available Hover" class="hover-image">
                        </div>
                        <div class="product-info">
                            <h3>Product Not Available</h3>
                        </div>
                    `;
                    productCard.querySelector('.product-image').style.pointerEvents = 'none';
                }

                productsContainer.appendChild(productCard);
                cardsLoaded++;
            }

            loading = false;
            hideLoadingIndicator();
        }, 1000);
    }

    function showLoadingIndicator() {
        loadingIndicator.style.display = 'block';
    }

    function hideLoadingIndicator() {
        loadingIndicator.style.display = 'none';
    }

    loadMoreProducts();
    window.addEventListener('scroll', lazyLoad);
});
