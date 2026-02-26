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
// MAIN PAGE ACCORDION
// ============================

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    accordionItems.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".accordion-content")?.classList.remove("open");
    });

    if (!isActive) {
      item.classList.add("active");
      content.classList.add("open");
    }
  });
});

// ============================
// PROJECT MODAL
// ============================

const modal = document.querySelector(".project-modal");
const modalContent = modal.querySelector(".project-modal-content");
const closeBtn = modal.querySelector(".project-modal-close");
const overlay = modal.querySelector(".project-modal-overlay");

document.querySelectorAll(".see-more").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();

    const id = btn.dataset.project;
    const data = document.getElementById(`project-${id}`);

    if (!data) return;

    modalContent.innerHTML = data.innerHTML;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("active");
  modalContent.innerHTML = "";
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

