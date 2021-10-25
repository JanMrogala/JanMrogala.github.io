function getUpscaledImgData(imgData, maxW, maxH) {
  var channels = 4;

  var imgWidth = imgData.width;
  var imgHeight = imgData.height;

  var ratio = Math.floor(scalePreserveAspectRatio(imgWidth, imgHeight, maxW, maxH));

  var pixelSize = ratio <= 0 ? 1 : ratio;


  var newWidth = imgWidth*pixelSize;
  var newHeight = imgHeight*pixelSize;

  var retData = new ImageData(newWidth, newHeight);

  for (let y = 0; y < imgHeight; y++) {

    for (let x = 0; x < imgWidth; x++) {

      for (let yy = y*pixelSize; yy < (y+1)*pixelSize; yy++) {

        for (let xx = x*pixelSize; xx < (x+1)*pixelSize; xx++) {

          retData.data[yy*retData.width*channels+xx*channels+0] = imgData.data[y*imgData.width*channels+x*channels+0];
          retData.data[yy*retData.width*channels+xx*channels+1] = imgData.data[y*imgData.width*channels+x*channels+1];
          retData.data[yy*retData.width*channels+xx*channels+2] = imgData.data[y*imgData.width*channels+x*channels+2];
          retData.data[yy*retData.width*channels+xx*channels+3] = imgData.data[y*imgData.width*channels+x*channels+3];

        }
      }
    }
  }
  return retData;
}