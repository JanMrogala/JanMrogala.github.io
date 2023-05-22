var canvas1 = document.getElementById("myCanvas1");
var canvas2 = document.getElementById("myCanvas2");

var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");

var img = new Image();
img.src = "resources/images/test1.png";
img.onload = imageManipulation;

function imageManipulation() {
  var cw = canvas1.width;
  var ch = canvas1.height;

  var w = img.width;
  var h = img.height;

  var wCoord = w;
  var hCoord = h;
  var xCoord = cw / 2 - wCoord / 2;
  var yCoord = ch / 2 - hCoord / 2;

  ctx1.clearRect(0, 0, cw, ch);
  ctx1.drawImage(img, xCoord, yCoord, wCoord, hCoord);
}

function convertToRight() {
  var cw = canvas1.width;
  var ch = canvas1.height;

  var w = img.width;
  var h = img.height;

  var wCoord = w;
  var hCoord = h;
  var xCoord = cw / 2 - wCoord / 2;
  var yCoord = ch / 2 - hCoord / 2;

  var imgData = ctx1.getImageData(xCoord, yCoord, wCoord, hCoord);

  var rescaledImgData = getUpscaledImgData(imgData, cw, ch);

  ctx2.clearRect(0, 0, cw, ch);
  ctx2.putImageData(
    rescaledImgData,
    cw / 2 - rescaledImgData.width / 2,
    ch / 2 - rescaledImgData.height / 2
  );
}

function clearRightCanvas() {
  var cw = canvas1.width;
  var ch = canvas1.height;
  ctx2.clearRect(0, 0, cw, ch);
}

function scalePreserveAspectRatio(imgW, imgH, maxW, maxH) {
  return Math.min(maxW / imgW, maxH / imgH);
}
