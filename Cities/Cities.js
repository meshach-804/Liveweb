// Data (can be replaced with API calls)
const cities = [
  { name:"Nairobi, Kenya", image:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Nairobi_City_Skyline.jpg", region:"africa", desc:"A vibrant tech hub and safari gateway.", link:"#"},
  { name:"Paris, France",   image:"https://upload.wikimedia.org/wikipedia/commons/1/10/Eiffel_tower_paris.jpg", region:"europe", desc:"Art, romance, and iconic landmarks.", link:"#"},
  { name:"Tokyo, Japan",    image:"https://upload.wikimedia.org/wikipedia/commons/5/59/Tokyo_Skyline.jpg", region:"asia", desc:"A blend of tradition and tech.", link:"#"},
  { name:"Rio de Janeiro, Brazil", image:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Rio_de_Janeiro_night.jpg", region:"americas", desc:"Sun, samba, and breathtaking vistas.", link:"#"},
  { name:"New York, USA",   image:"https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=600", region:"americas", desc:"The city that never sleeps.", link:"#"},
  { name:"Cairo, Egypt",    image:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Pyramids_panorama_at_night_-_panoramio.jpg", region:"africa", desc:"Ancient wonders and modern bustle.", link:"#"}
];

const container    = document.getElementById("cityContainer");
const searchInput  = document.getElementById("searchInput");
const regionFilter = document.getElementById("regionFilter");

// Render city cards based on filters
renderCities = () => {
  const q = searchInput.value.toLowerCase();
  const r = regionFilter.value;
  container.innerHTML = "";
  cities.filter(c => (r==="all"||c.region===r) && c.name.toLowerCase().includes(q))
        .forEach(c => {
    const card = document.createElement("div");
    card.className = "city-card";
    card.innerHTML = `
      <img src="${c.image}" alt="${c.name}">
      <div class="city-overlay">
        <h3>${c.name}</h3>
        <p>${c.desc}</p>
        <a href="${c.link}">View Details</a>
      </div>`;
    container.appendChild(card);
  });
}

// Newsletter form handler
document.getElementById("newsletterForm").addEventListener("submit", e => {
  e.preventDefault();
  alert(`Thanks for subscribing, ${document.getElementById("newsletterEmail").value}!`);
  e.target.reset();
});

// Event listeners
searchInput.addEventListener("input", renderCities);
regionFilter.addEventListener("change", renderCities);

// Initial load
renderCities();
