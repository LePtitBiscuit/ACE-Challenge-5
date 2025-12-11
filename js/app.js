// Logique principale du dashboard DSIN

const navItems = document.querySelectorAll(".nav-item");
const pageTitle = document.getElementById("page-title");
const cardsContainer = document.getElementById("cards");

// Fonction de rendu principal
function renderSection(key) {
  const section = sections[key];
  if (!section) return;

  pageTitle.textContent = section.title;

  if (section.customContent) {
    cardsContainer.className = "cards";
    if (key === "overview") {
      cardsContainer.innerHTML = renderOverviewContent();
    } else if (key === "systemes") {
      cardsContainer.innerHTML = renderSystemesContent();
    } else if (key === "audit") {
      cardsContainer.innerHTML = renderAuditContent();
    } else if (key === "incidents") {
      cardsContainer.innerHTML = renderIncidentsContent();
    }
  } else {
    cardsContainer.className = "cards default-layout";
    cardsContainer.innerHTML = renderDefaultContent(section);
  }
}

// Gestion de la navigation
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const target = item.dataset.target;
    navItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
    renderSection(target);
  });
});

// Initialisation : afficher la vue d'ensemble
renderSection("overview");
