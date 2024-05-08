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
  alert("Executing loadForegroundImage()");
  let imageFile = document.getElementById("file2");

  let image1 = new SimpleImage(imageFile);
  let canvas2 = document.getElementById("canvas2");
  
  backgroundImage = image1;
  backgroundImage.drawTo(canvas2);
  
}
function doGreenScreen(){
  alert("Executing doGreenScreen()");
  
}
function clearCanvas(){
  alert("Executing clearCanvas()");
  
}