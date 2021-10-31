const rslider = document.getElementById("rslider");

const rleft = document.getElementById("rleft");

const rright = document.getElementById("rright");

var rsection = 0;

rleft.addEventListener("click", function () {
  rsection = rsection > 0 ? rsection - 1 : 0;
  rslider.style.transform = "translate(" + rsection * -20 + "%)";
});

rright.addEventListener("click", function () {
  rsection = rsection < 3 ? rsection + 1 : 3;
  rslider.style.transform = "translate(" + rsection * -20 + "%)";
});
