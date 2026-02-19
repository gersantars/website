// Filtrado por categoría
const filter = document.getElementById("categoryFilter");
const projects = document.querySelectorAll(".project");

if (filter) {
  filter.addEventListener("change", () => {
    projects.forEach(project => {
      const category = project.dataset.category;
      project.style.display =
        filter.value === "all" || category === filter.value ? "grid" : "none";

      // Cerrar detalles al filtrar
      const details = project.querySelector(".project-details");
      details.classList.remove("open");
    });
  });
}

// Acordeón: abrir un proyecto y cerrar los demás
projects.forEach(project => {
  const title = project.querySelector(".projects-table.row span:nth-child(2)");
  const details = project.querySelector(".project-details");

  if (title && details) {
    title.addEventListener("click", () => {
      // Cerrar todos los demás detalles
      projects.forEach(p => {
        if (p !== project) {
          p.querySelector(".project-details").classList.remove("open");
        }
      });

      // Alternar este detalle
      details.classList.toggle("open");
    });
  }
});

const filterButtons = document.querySelectorAll(".filter button");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // quitar activo a todos
    filterButtons.forEach(b => b.classList.remove("active"));
    // activar el clickeado
    button.classList.add("active");
  });
});
