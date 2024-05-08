let foregroundImage = null;
let backgroundImage = null;

function loadForegroundImage(){
  alert("Executing loadForegroundImage()");
  let imageFile = document.getElementById("file1");

  let image1 = new SimpleImage(imageFile);
  let canvas1 = document.getElementById("canvas1");
  
  foregroundImage = image1;
  foregroundImage.drawTo(canvas1);
}
function loadBackgroundImage(){
  console.log("Executing loadForegroundImage()");
  let imageFile = document.getElementById("file2");

  let image1 = new SimpleImage(imageFile);
  let canvas2 = document.getElementById("canvas2");
  
  backgroundImage = image1;
  backgroundImage.drawTo(canvas2);
  
}
function doGreenScreen(){
  if (foregroundImage == null) {
    alert("Foreground Image is NOT loaded.\n\tUpload a Foreground Image");
    return;
  }
  // if (backgroundImage == null || backgroundImage != backgroundImage.complete()) {
  if (backgroundImage == null ) {
    alert("Background Image is NOT loaded.\n\tUpload a Background Image");
    return;
  }
  if (!imageSizesAreSame()) {
    alert("The Background Image and Foreground Image are not the same size. \n\t Upload images of the same size.");
    return;
  }
  backgroundImage = createComposite();
  backgroundImage.drawTo(canvas2);
  
}

function createComposite() {
  let compositeImage = new SimpleImage(foregroundImage.getWidth(), foregroundImage.getHeight());
  for (let pixel of foregroundImage.values()){
    let x = pixel.getX();
    let y = pixel.getY();
    if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()){
      let backgroundPixel = backgroundImage.getPixel(x, y);
      compositeImage.setPixel(x,y, backgroundPixel);
    } else {
      compositeImage.setPixel(x,y, foregroundImage.getPixel(x,y));
    }
  }
  return compositeImage;
}
function clearCanvas(){
  let id1 = "canvas1";
  let id2 = "canvas2";
  clearCanvasById(id1);
  clearCanvasById(id2);
  foregroundImage = null;
  backgroundImage = null;
}

function clearCanvasById(canvasId){
  let canvas = document.getElementById(canvasId);
  let context = canvas.getContext("2d");
  context.clearRect(0,0, canvas.clientWidth,canvas.height);
}

function imageSizesAreSame() {
  if (backgroundImage.width != foregroundImage.width || backgroundImage.height != foregroundImage.height) return false;
  return true;
}