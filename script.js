(function () {
  let canvas = document.querySelector("#canvas");
  let isDrawing = false;
  let previousX = null;
  let previousY = null;

  function handleStart(e) {
    isDrawing = true;
    let x = e.pageX; //catch the current X
    let y = e.pageY; //catch the current Y
    //save the starting coordinates
    previousX = x;
    previousY = y;
  }

  function handleEnd() {
    isDrawing = false;
  }

  function handleMove(e) {
    if (!isDrawing) return;

    let x = e.pageX; //current X
    let y = e.pageY; //current Y

    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(previousX, previousY);
    ctx.lineTo(x, y);

    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ff0000";
    ctx.stroke();

    //set x and y for the next move event
    previousX = x;
    previousY = y;
  }

  canvas.addEventListener("pointerdown", handleStart);
  canvas.addEventListener("pointerup", handleEnd);
  canvas.addEventListener("pointercancel", handleEnd);
  canvas.addEventListener("pointermove", handleMove);
})();
