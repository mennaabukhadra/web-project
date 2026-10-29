document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('skin-care-theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  if (!button) return;

  const updateLabel = () => {
    const isDark = document.body.classList.contains('dark-mode');
    button.textContent = isDark ? 'Light mode' : 'Dark mode';
    button.setAttribute('aria-pressed', String(isDark));
  };

  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('skin-care-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    updateLabel();
  });

  updateLabel();
});
