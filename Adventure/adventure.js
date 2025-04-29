// Search and Filter
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');

// Event listeners for search and filter
searchInput.addEventListener('keyup', filterCards);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    applyFilter(filter);
  });
});

// Filter cards based on search input
function filterCards() {
  const query = searchInput.value.toLowerCase().trim();
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const desc = card.querySelector('p').textContent.toLowerCase();
    card.style.display = (title.includes(query) || desc.includes(query) || query === "") ? "block" : "none";
  });
}

// Apply filter based on category
function applyFilter(filter) {
  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    card.style.display = (filter === "all" || filter === category) ? "block" : "none";
  });
  searchInput.value = ""; // Clear search input after filtering by category
}
