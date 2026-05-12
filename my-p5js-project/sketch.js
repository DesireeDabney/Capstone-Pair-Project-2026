function setup() {
    // Create the canvas
    createCanvas(1200, 700);
    myPicker = createColorPicker("black");
    myPicker.position(80,50);

    // Set background to black
    background(255);

    // Set width of the lines
    strokeWeight(10);

    saveState();

    // Set screen reader accessible description
    describe('A blank canvas where the user draws by dragging the mouse');
  }

  function mouseDragged() {
    // Set the color based on the mouse position, and draw a line
    // from the previous position to the current position
    stroke(myPicker.color(), 90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
