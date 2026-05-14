let borderwidth = document.getElementById("borderwidth");

// Event Listeners to make sure border width is greater than 1 but less than 100 at all times
borderwidth.addEventListener("keyup", checkNum);
borderwidth.addEventListener("click", checkNum);
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
    saveCanvas();
  })
}

// Function for regex
function checkNum() {
  console.log("test");
  if (borderwidth.value >= 100) borderwidth.value = 100;
  console.log(borderwidth.value); 
  if (borderwidth.value <= 1) borderwidth.value = 1; 
};
 
function mouseDragged() {
  strokeWeight(borderwidth.value);
  stroke(myPicker.color(), 90, 90);
  line(pmouseX, pmouseY, mouseX, mouseY);
}