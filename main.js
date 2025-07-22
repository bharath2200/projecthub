
fetch('projects.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('project-grid');
    data.forEach(project => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${project.poster}" alt="${project.title} Poster">
        <h2>${project.title}</h2>
        <p>${project.author}</p>
        <div class="buttons">
          <a href="${project.watch}" target="_blank">🎬 Watch</a>
          <a href="${project.code}" target="_blank">⬇️ Code</a>
        </div>
      `;
      container.appendChild(card);
    });
  });
