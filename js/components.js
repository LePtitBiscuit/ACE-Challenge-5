// Composants de rendu par défaut pour les sections standards

function renderDefaultContent(section) {
  return `
    <article class="card highlight">
      <p class="eyebrow">Focus</p>
      <h3>Zone en cours : ${section.title}</h3>
      <p class="muted">${section.focus || "Les éléments de cette épreuve s'afficheront ici."}</p>
    </article>
    <article class="card">
      <p class="eyebrow">Statut</p>
      <div class="status-row">
        <span class="pill pill-success">Success</span>
        <span class="pill pill-danger">Error</span>
        <span class="pill pill-warning">Warning</span>
      </div>
      <p class="muted">Palette de statut conforme à la charte.</p>
    </article>
    <article class="card grid">
      ${section.slots
        ?.map(
          (slot, idx) => `
        <div>
          <p class="eyebrow">${slot}</p>
          <p class="muted">${section.captions?.[idx] || "Section prête pour vos contenus."}</p>
        </div>
      `
        )
        .join("")}
    </article>
  `;
}
