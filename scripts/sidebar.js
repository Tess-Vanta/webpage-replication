const toggle = document.getElementById("toggle");
const x = document.getElementById("close");
const sidebar = document.getElementById("sidebar");

document.onclick = function (e) {
  if (e.target.id !== "sidebar" && e.target.id !== "toggle") {
    toggle.classList.add("active");
    sidebar.classList.remove("active");
    x.classList.remove("active");
  }
};

window.addEventListener("scroll", function () {
  toggle.classList.add("active");
  sidebar.classList.remove("active");
  x.classList.remove("active");
});

toggle.onclick = function () {
  toggle.classList.remove("active");
  sidebar.classList.add("active");
  x.classList.add("active");
};
x.onclick = function () {
  toggle.classList.add("active");
  sidebar.classList.remove("active");
  x.classList.remove("active");
};
