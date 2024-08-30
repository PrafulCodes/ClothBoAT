const finderIcon = document.getElementById('finder-icon');
const searchBarContainer = document.getElementById('search-bar-container');
const closeBtn = document.getElementById('close-btn');
const mainContent = document.getElementById('main-content');
const header = document.querySelector('header');
const searchResults = document.getElementById('search-results');

finderIcon.addEventListener('click', (e) => {
    e.preventDefault();
    openSearchBar();
});

closeBtn.addEventListener('click', () => {
    closeSearchBar();
});

document.addEventListener('click', (e) => {
    if (document.body.classList.contains('search-active') && 
        !searchBarContainer.contains(e.target) && 
        !finderIcon.contains(e.target) && 
        !searchResults.contains(e.target)) {
        closeSearchBar();
    }
});

window.addEventListener('scroll', () => {
    if (document.body.classList.contains('search-active') && !isElementInViewport(header)) {
        closeSearchBar();
    }
});

function openSearchBar() {
    document.body.classList.add('search-active');
    searchBarContainer.classList.remove('inactive');
    searchBarContainer.classList.add('active');
    mainContent.classList.add('blur');
}

function closeSearchBar() {
    searchBarContainer.classList.remove('active');
    searchBarContainer.classList.add('inactive');
    mainContent.classList.remove('blur');
    
    setTimeout(() => {
        document.body.classList.remove('search-active');
    }, 300); 
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

function searchProducts() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const searchResults = document.getElementById('search-results');

    const products = [
        { name: "All Collection", url: "All Collection.html" },
        { name: "Ankel Leggings", url: "AnkelLeggings.html" },
        { name: "Best Sellers", url: "Best Sellers.html" },
        { name: "Bottom Wear", url: "BottomWear.html" },
        { name: "Camisole", url: "Camisole.html" },
        { name: "Casual Wear", url: "Casual Wear.html" },
        { name: "Churidar", url: "Churidar.html"},
        { name: "Dresses", url: "Dresses.html"},
        { name: "Festive Wear", url: "Festive Wear.html"},
        { name: "Harem", url: "Harem.html"},
        { name: "Maternity Wear", url: "Maternity Wear.html"},
        { name: "New Arrivals", url: "NewArrivals.html"},
        { name: "Pantties", url: "Pantties.html"},
        { name: "Shimmers", url: "Shimmer.html"},
        { name: "Straight Pants", url: "Straight.html"},
        { name: "T-shirt", url : "T-shirt.html"},
        { name: "TopWares", url : "TopWare.html"},
        { name: "Under Rs.699", url : "Under699.html"},
    ];

    let results = products.filter(product => product.name.toLowerCase().includes(filter));
    
    searchResults.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            const div = document.createElement('div');
            div.textContent = result.name;
            div.classList.add('search-result-item');
            div.addEventListener('click', () => {
                window.location.href = result.url;
            });

            searchResults.appendChild(div);
        });
    } else {
        searchResults.innerHTML = '<div>No search results found</div>';
    }
}