document.getElementById('loginForm').addEventListener('submit', function(event) {
  // Clear previous error messages
  document.getElementById('usernameError').textContent = '';
  document.getElementById('passwordError').textContent = '';

  // Get form values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  let isValid = true;

  // Validate username and password
  if (!username) {
    document.getElementById('usernameError').textContent = 'Username is required';
    isValid = false;
  }
  if (!password) {
    document.getElementById('passwordError').textContent = 'Password is required';
    isValid = false;
  }

  // If form is invalid, prevent submission
  if (!isValid) {
    event.preventDefault();
  }
});
