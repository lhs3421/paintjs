//  변수선언

const canvas = document.querySelector("#jsCanvas");

let painting = false;
// 조건문 선언

// canvas 위에서 움직이는지 아닌지 확인
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}

// 함수 선언

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

function stopPainting() {
  painting = false;
}
