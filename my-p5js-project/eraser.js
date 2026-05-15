let eraserMode = false;

const eraserButton = document.getElementById("eraserToggle");

eraserButton.addEventListener("click", () => {
  eraserMode = !eraserMode;

  if (eraserMode) {
    eraserButton.innerText = "Brush";
  } else {
    eraserButton.innerText = "Eraser";
  }
});
