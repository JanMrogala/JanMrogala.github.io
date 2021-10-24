var canvas = document.getElementById("myCanvas");
var debug = document.getElementById("debug");

var ctx = canvas.getContext("2d");

var img = new Image();
img.src = "resources/images/scream.jpg";

img.onload = function(){
  var cw = canvas.width;
  var ch = canvas.height;

  var w = img.width;
  var h = img.height;

  var sizer = scalePreserveAspectRatio(w, h, cw, ch)

  ctx.drawImage(img,cw/2-(w/2)*sizer,ch/2-(h/2)*sizer,w*sizer,h*sizer);

  debug.textContent = "sizer: " + sizer;
}

function scalePreserveAspectRatio(imgW,imgH,maxW,maxH){
  return(Math.min((maxW/imgW),(maxH/imgH)));
}
