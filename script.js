let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
};
resetBtn.addEventListener("click", resetGame);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML === "") {
      if (turnO) {
        box.innerHTML = "O";
        turnO = false;
      } else {
        box.innerHTML = "X";
        turnO = true;
      }
    }
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let box1 = boxes[pattern[0]].innerHTML;
    let box2 = boxes[pattern[1]].innerHTML;
    let box3 = boxes[pattern[2]].innerHTML;

    if (box1 !== "" && box1 === box2 && box2 === box3) {
      alert(`${box1} is the winner!`);
      resetGame();
    }
  }
};
