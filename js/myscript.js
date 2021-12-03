document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems);
});

convertImgBtn = document.getElementById("btnConvertImg");
convertImgBtn.addEventListener("click", convertToRight);
