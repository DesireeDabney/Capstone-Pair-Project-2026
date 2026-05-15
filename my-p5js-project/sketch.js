// getting variables from index.html
const borderWidth = document.getElementById("borderWidth");
const canvasName = document.getElementById("saveName");

// Event Listeners to make sure border width is greater than 1 but less than 100 at all times
borderWidth.addEventListener("keyup", checkNum);
borderWidth.addEventListener("click", checkNum);

function setup() {
  // Create the canvas
  createCanvas(1200, 700);
  // Create color picker
  myPicker = createColorPicker("black");
  myPicker.position(80, 50);
  // Title for color picker
  let p = createP("Color");
  p.position(85, 30);
  // Set background to black
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
