// Project Section

const slider = document.getElementById("slider");

const left = document.getElementById("left");

const right = document.getElementById("right");

var section = 0;

left.addEventListener("click", function () {
  section = section > 0 ? section - 1 : 0;
  slider.style.transform = "translate(" + section * -420 + "px)";
});

right.addEventListener("click", function () {
  section = section < 3 ? section + 1 : 3;
  slider.style.transform = "translate(" + section * -420 + "px)";
});
