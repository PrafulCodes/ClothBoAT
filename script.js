let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const loadingBars = document.querySelectorAll(".loading-bar");

function showSlides() {
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    loadingBars.forEach(bar => {
        bar.classList.remove('active');
    });
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    }
    slides[slideIndex - 1].style.display = "block";
    loadingBars[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 7000);
}
window.onload = showSlides;

document.addEventListener("DOMContentLoaded", function() {
    const finderIcon = document.getElementById('finder-icon');
    const searchBar = document.getElementById('search-bar');
    const searchInput = document.getElementById('search-input');
    const closeBtn = document.getElementById('close-btn');

    if (finderIcon && searchBar && searchInput && closeBtn) {
        finderIcon.addEventListener('click', function() {
            searchBar.style.display = 'block';
            searchInput.focus(); 
        });

        closeBtn.addEventListener('click', function() {
            searchBar.style.display = 'none';
            searchInput.value = '';
        });

        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                console.log('Search term:', searchInput.value);
                closeSearch();
            }
        });
    }
    const cards = document.querySelectorAll('.card-image');
    const defaultImages = {
        product1: 'https://www.hayclothing.in/cdn/shop/files/DSC09678.webp?v=1717668770&width=360',
        product2: 'https://www.hayclothing.in/cdn/shop/files/DSC04119.webp?v=1717155402&width=940',
        product3: 'https://www.hayclothing.in/cdn/shop/files/DSC08136.webp?v=1717153866&width=360',
        product4: 'https://www.hayclothing.in/cdn/shop/files/DSC08925.webp?v=1717153147&width=1100'
    };
    const hoverImages = {
        product1: 'https://www.hayclothing.in/cdn/shop/files/DSC09691.webp?v=1717668770&width=360',
        product2: 'https://www.hayclothing.in/cdn/shop/files/DSC04149.webp?v=1717155402&width=360',
        product3: 'https://www.hayclothing.in/cdn/shop/files/DSC08081.webp?v=1717153866&width=360',
        product4: 'https://www.hayclothing.in/cdn/shop/files/DSC08942.webp?v=1717153147&width=360'
    };
    cards.forEach(card => {
        const productId = card.id;
        const defaultImg = defaultImages[productId];
        const hoverImg = hoverImages[productId];

        card.innerHTML = `
            <img src="${defaultImg}" alt="Product Image" class="default-image">
            <img src="${hoverImg}" alt="Hover Image" class="hover-image">
        `;

        card.addEventListener('mouseenter', function() {
            card.querySelector('.default-image').style.opacity = '0';
            card.querySelector('.hover-image').style.opacity = '1';
        });

        card.addEventListener('mouseleave', function() {
            card.querySelector('.default-image').style.opacity = '1';
            card.querySelector('.hover-image').style.opacity = '0';
        });
    });

    document.querySelectorAll('.white-ball').forEach(ball => {
        ball.addEventListener('mouseover', function() {
            const tooltipId = this.getAttribute('data-tooltip-id');
            const tooltip = document.getElementById(tooltipId);
            if (tooltip) {
                tooltip.style.display = 'block';
            }
        });

        ball.addEventListener('mouseout', function() {
            const tooltipId = this.getAttribute('data-tooltip-id');
            const tooltip = document.getElementById(tooltipId);
            if (tooltip) {
                tooltip.style.display = 'none';
            }
        });
    });
});