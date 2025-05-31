// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Carousel functionality
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const items = carousel.querySelectorAll(".carousel-item");

const scrollAmount = 336; // width of card (320px + 24px gap)

function updateActiveItem() {
  const carouselRect = carousel.getBoundingClientRect();
  let closestIndex = 0;
  let closestDistance = Infinity;

  items.forEach((item, index) => {
    const itemRect = item.getBoundingClientRect();
    // Calculate distance from center of carousel viewport
    const itemCenter = itemRect.left + itemRect.width / 2;
    const carouselCenter = carouselRect.left + carouselRect.width / 2;
    const distance = Math.abs(carouselCenter - itemCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  items.forEach((item, index) => {
    if (index === closestIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Initial update
updateActiveItem();

// Update on scroll with debounce
let debounceTimeout;
carousel.addEventListener("scroll", () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    updateActiveItem();
  }, 100);
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
});


