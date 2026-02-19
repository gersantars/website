// Filtrado por categoría
const filter = document.getElementById("categoryFilter");
const projects = document.querySelectorAll(".project");

if (filter) {
  filter.addEventListener("change", () => {
    projects.forEach(project => {
      const category = project.dataset.category;
      project.style.display =
        filter.value === "all" || category === filter.value ? "grid" : "none";
    });
  });
}

// Desplegar detalles con animación
projects.forEach(project => {
  const title = project.querySelector(".projects-table.row span:nth-child(2)");
  const details = project.querySelector(".project-details");

  if (title && details) {
    title.style.cursor = "pointer"; // que se vea clickeable

    title.addEventListener("click", () => {
      details.classList.toggle("open"); // agrega/quita la clase "open"
    });
  }
});
