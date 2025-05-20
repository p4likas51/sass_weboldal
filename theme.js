const toggleBtn = document.querySelector('.theme-toggle');
const body = document.body;

// Alapértelmezett mód beállítása
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
} else {
  body.classList.add('light-mode');
  toggleBtn.textContent = '🌙';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});
