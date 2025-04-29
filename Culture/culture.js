document.addEventListener("DOMContentLoaded", () => {
  const culturalItems = [

    {
      title: "Sushi Workshop",
      description: "Learn authentic sushi-making from Japanese chefs.",
      type: "cuisine",
      image: "../Images/Sushi_platter.jpg"
    },
    {
      title: "Flamenco Night",
      description: "Experience soulful music and dance from Spain.",
      type: "art",
      image: "../Images/flamenco.avif"
    },
    {
      title: "Maori Haka",
      description: "A powerful tradition from New Zealand's Māori people.",
      type: "tradition",
      image: "../Images/maori.avif"
    },
    {
      title: "Oktoberfest",
      description: "The world’s largest beer festival in Germany.",
      type: "festival",
      image: "../Images/oktoberfest.webp"
    },
    {
      title: "Moroccan Cuisine",
      description: "Dive into tagines, spices, and sweet mint tea.",
      type: "cuisine",
      image: "../Images/moroccan.jpg"
    }
  ];

  const grid = document.getElementById("gridContainer");
  const searchInput = document.getElementById("seachInput");
  const searchBtn = document.getElementById("searchBtn");
  const filterBtns = document.querySelectorAll(".cat-btn");

  const renderCards = (items) => {
    grid.innerHTML = items.length
      ? items.map(item => `
        <div class="card">
          <img src="${item.image}" alt="${item.title}">
          <div class="card-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
          <div class="card-overlay">
            <a href="#">View Details</a>
          </div>
        </div>
      `).join("")
      : `<p>No cultural items found.</p>`;
  };

  const applyFilter = (type) => {
    filterBtns.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[data-type="${type}"]`)?.classList.add("active");
    const filtered = type === "all" ? culturalItems : culturalItems.filter(item => item.type === type);
    renderCards(filtered);
  };

  const applySearch = () => {
    const query = searchInput.value.toLowerCase();
    const results = culturalItems.filter(item =>
      item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
    );
    renderCards(results);
  };

  // Listeners
  searchBtn.addEventListener("click", applySearch);
  searchInput.addEventListener("keypress", e => { if (e.key === "Enter") applySearch(); });
  filterBtns.forEach(btn => btn.addEventListener("click", () => applyFilter(btn.dataset.type)));

  // Initial render
  renderCards(culturalItems);
});
