var canvas = document.getElementById("myCanvas");
var debug = document.getElementById("debug");

var ctx = canvas.getContext("2d");

var img = new Image();
img.src = "resources/images/scream.jpg";
img.onload = imageManipulation;

function imageManipulation(){
  var cw = canvas.width;
  var ch = canvas.height;

  var w = img.width;
  var h = img.height;

  

  var sizer = scalePreserveAspectRatio(w, h, cw, ch);

  var xCoord = cw/2-(w/2)*sizer;
  var yCoord = ch/2-(h/2)*sizer;

  ctx.drawImage(img, xCoord, yCoord, w*sizer, h*sizer);

  var imgData = ctx.getImageData(xCoord, yCoord, w*sizer, h*sizer);

  debug.textContent = "sizer: " + imgData.data.length;

  editImage(imgData);

  ctx.clearRect(0, 0, cw, ch);
  ctx.putImageData(imgData, xCoord, yCoord);

}

function scalePreserveAspectRatio(imgW,imgH,maxW,maxH){
  return(Math.min((maxW/imgW),(maxH/imgH)));
}

function editImage(imgData) {
  for (let i = 0; i < 100000; i++) {
    imgData.data[i] = (i*2)%255;
  } 
}
