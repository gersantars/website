const filter = document.getElementById("categoryFilter");
const rows = document.querySelectorAll(".project-row");
alert("JS cargado");

filter.addEventListener("change", () => {
  rows.forEach(row => {
    row.style.display =
      filter.value === "all" || row.dataset.category === filter.value
        ? "grid"
        : "none";
  });
});

rows.forEach(row => {
  row.querySelector(".expand").addEventListener("click", () => {
    const details = row.querySelector(".project-details");
    details.style.display =
      details.style.display === "block" ? "none" : "block";
  });
});

