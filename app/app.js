document.getElementById('searchBar').addEventListener('input', function(e) {
    const searchValue = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.receta-card');
  
    cards.forEach(card => {
      const recetaNombre = card.querySelector('h3').textContent.toLowerCase();
      if (recetaNombre.includes(searchValue)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });