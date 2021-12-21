btnConvertImg = "#btnConvertImg";

btnConvertImgClicked = false;

$(btnConvertImg).click(function () {
  if (!btnConvertImgClicked) {
    convertToRight();
    $(btnConvertImg).html("Undo");
  } else {
    clearRightCanvas();
    $(btnConvertImg).html("Enlarge");
  }
  btnConvertImgClicked = !btnConvertImgClicked;
});
