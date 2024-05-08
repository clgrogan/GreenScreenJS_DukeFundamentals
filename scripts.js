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
  if (foregroundImage == null || foregroundImage != foregroundImage.complete()) {
    alert("Background Image is NOT loaded.");
    return;
  }
  if (backgroundImage == null || backgroundImage != backgroundImage.complete()) {
    alert("Background Image is NOT loaded.");
    return;
  }
  
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