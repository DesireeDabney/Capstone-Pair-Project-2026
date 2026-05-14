let borderwidth = document.getElementById("borderwidth");

function setup() {
  // Create the canvas
  createCanvas(1200, 700);
  myPicker = createColorPicker("black");
  myPicker.position(80, 50);

  // Title for color
  let p = createP("Color");
  p.position(85, 30);
  // Set background to black
  background(255);

  // Set width of the lines

  saveState();

  // Set screen reader accessible description
  describe("A blank canvas where the user draws by dragging the mouse");
}

// Event Listeners to make sure border width is greater than 1 but less than 100 at all times
borderwidth.addEventListener("keyup", checkNum);
borderwidth.addEventListener("click", checkNum);

function checkNum() {
  console.log("test");
  if (borderwidth.value >= 100) borderwidth.value = 100;
  console.log(borderwidth.value); // Force cap at 100
  if (borderwidth.value <= 1) borderwidth.value = 1; // Force floor at 0
};

function mouseDragged() {
  // Set the color based on the mouse position, and draw a line
  // from the previous position to the current position
  strokeWeight(borderwidth.value);
  stroke(myPicker.color(), 90, 90);
  line(pmouseX, pmouseY, mouseX, mouseY);
}