// getting variables from index.html
const borderWidth = document.getElementById("borderWidth");
const canvasName = document.getElementById("saveName");
const clearStorage = document.getElementById("clearStorage");
// save canvas as a variable name for later use
let canvas;
// Event Listeners for buttons/inputs
borderWidth.addEventListener("keyup", checkNum);
borderWidth.addEventListener("click", checkNum);
clearStorage.addEventListener("click", clearCanvasStorage);

function setup() {
  // Create the canvas
  canvas = createCanvas(1200, 700);

     if (getItem('savedCanvas')) {
    loadImage(getItem('savedCanvas'), img => {
      image(img, 0, 0, width, height);
    });
  }
  // Create color picker for brush
  myPicker = createColorPicker("black");
  myPicker.position(80, 50);
  // Create color picker for background
  myBackground = createColorPicker("white");
  myBackground.position(80, 370);
  myBackground.elt.addEventListener("input", () => {
    background(myBackground.color());
  });
  // Title for brush
  let p = createP("Color");
  p.position(85, 30);
  // Title for background
  let p2 = createP("Background");
  p2.position(70, 345);
  // Set background to white
  background(255);
  // Function in undo.js
  saveState();
  // Set screen reader accessible description
  describe("A blank canvas where the user draws by dragging the mouse");

  // Button in html that save canvas without resetting
  document.getElementById('canvasSave').addEventListener('click', () => {
    saveCanvas(canvasName.value);
  })
}


// Function for regex
function checkNum() {
  if (borderWidth.value >= 100) borderWidth.value = 100;
  if (borderWidth.value <= 1) borderWidth.value = 1; 
};

function mouseDragged() {
  strokeWeight(borderWidth.value);
   if (eraserMode) {
    stroke(255);
  } else {
    stroke(myPicker.color());
  }
  line(pmouseX, pmouseY, mouseX, mouseY);
  
}

// function to save the canvas whenever the mouse is released into local storage
function mouseReleased() {
  console.log('savedCanvas', canvas.elt.toDataURL());
  storeItem('savedCanvas', canvas.elt.toDataURL());
}

function clearCanvasStorage(){
  removeItem('savedCanvas');
  clear();
  background(255);
}