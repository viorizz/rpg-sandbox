document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.class-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });
});
