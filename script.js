const panels = document.querySelectorAll(".panel");
for (const panel of panels) {
  panel.addEventListener("click", function (e) {
    removeActiveClass();
    panel.classList.add("active");
  });
}

function removeActiveClass() {
  for (const panel of panels) {
    if (panel.classList.contains("active")) panel.classList.remove("active");
  }
}
