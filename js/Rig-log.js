document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      window.location.href = 'home.html';
    });
  }
});

function validateForm() {
  const password = document.getElementById('password').value;
  const confirmation = document.getElementById('confirm_password').value;
  const message = document.getElementById('error-message');

  if (password !== confirmation) {
    message.textContent = 'Passwords do not match.';
    return false;
  }

  window.location.href = 'home.html';
  return false;
}
