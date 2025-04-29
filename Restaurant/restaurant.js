// Sidebar toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Search and Filter
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');

searchBtn.addEventListener('click', filterCards);
searchInput.addEventListener('keyup', filterCards);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    applyFilter(filter);
  });
});

function filterCards() {
  const query = searchInput.value.toLowerCase().trim();
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const desc = card.querySelector('p').textContent.toLowerCase();
    if (title.includes(query) || desc.includes(query) || query === "") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function applyFilter(filter) {
  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (filter === "all" || filter === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
  searchInput.value = "";
}
