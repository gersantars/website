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
// MAIN PAGE ACCORDION
// ============================

const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const content = item.querySelector(".accordion-content");

    // cerrar todos los demás
    document.querySelectorAll(".accordion-content").forEach(c => {
      if (c !== content) c.classList.remove("open");
    });

    // abrir / cerrar este
    content.classList.toggle("open");
  });
});
