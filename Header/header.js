// Toggle Sidebar visibility
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// Toggle Login Popup visibility
function toggleLoginForm() {
  document.getElementById('loginPopup').classList.toggle('show');
}

fetch('../Header/header.html')
  .then(res => res.text())
  .then(html => document.getElementById('header-placeholder').innerHTML = html)
  .catch(console.error);
