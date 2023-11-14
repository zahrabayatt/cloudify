const collapses = document.querySelectorAll(".collapsible");
collapses.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
