let image = document.getElementById("image");
let images = [
  "./assets/images/Banner_2.jpg",
  "./assets/images/Banner_3.jpg",
  "./assets/images/Banner_4.jpg",
];
var i = 0;

function changeImg() {
  image.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
setInterval(changeImg, 10000);
