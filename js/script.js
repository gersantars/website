document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".accordion-content")
    .forEach(c => c.classList.remove("open"));
});

// ============================
// PROJECT FILTER BUTTONS
// ============================

const projects = document.querySelectorAll(".project");
const filterButtons = document.querySelectorAll(".filter button");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    // estado activo
    filterButtons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    // filtrar proyectos
    projects.forEach(project => {
      const category = project.dataset.category;
      project.style.display =
        filter === "all" || category === filter ? "grid" : "none";

      // cerrar detalles abiertos
      project.querySelector(".project-details").classList.remove("open");
    });
  });
});


// ============================
// PROJECT DETAILS ACCORDION
// ============================

projects.forEach(project => {
  const title = project.querySelector(
    ".projects-table.row span:nth-child(2)"
  );
  const details = project.querySelector(".project-details");

  if (!title || !details) return;

  title.addEventListener("click", () => {
    // cerrar otros proyectos
    projects.forEach(p => {
      if (p !== project) {
        p.querySelector(".project-details").classList.remove("open");
      }
    });

    // toggle actual
    details.classList.toggle("open");
  });
});




// ============================
// MAIN PAGE ACCORDION (VIEWPORT CONTROLLED)
// ============================

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // cerrar todos
    accordionItems.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".accordion-content")?.classList.remove("open");
    });

    // si no estaba activo, abrirlo
    if (!isActive) {
      item.classList.add("active");
      content.classList.add("open");
    }
  });
});

