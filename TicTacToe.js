let data = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let boxes = document.querySelectorAll(".box");
let mtch_rztl_msg = document.querySelector(".congrats");
let reset_New = document.querySelector(".reset_AND_new_game");
let msj = document.querySelector(".message");

const boxes_disabling = () => {
  for (let i of boxes) {
    i.disabled = true;
  }
};

const congrats = () => {
  msj.classList.remove("add-msg");
  reset_New.innerText = "New Game";
};

let filled_boxes = 0;
boxes.forEach((filled_box) => {
  filled_box.addEventListener("click", () => {
    filled_boxes++;
  });
});

let initial_val = "X";
boxes.forEach((daby) => {
  daby.addEventListener("click", () => {
    if (initial_val === "X") {
      daby.innerText = initial_val;
      initial_val = "O";
      daby.disabled = true;
    } else {
      daby.innerText = initial_val;
      initial_val = "X";
      daby.disabled = true;
    }
    winner();
  });
});

const winner = () => {
  let win = false;
  for (let i of data) {
    let val_1 = boxes[i[0]].innerText;
    let val_2 = boxes[i[1]].innerText;
    let val_3 = boxes[i[2]].innerText;

    if (val_1 != "" && val_2 != "" && val_3 != "") {
      if (val_1 === val_2 && val_2 === val_3) {
        mtch_rztl_msg.innerText = `${val_1} won`;
        boxes_disabling();
        win = true;
        congrats();
        break;
      }
    }
  }
  if (filled_boxes == 9 && win != true) {
    mtch_rztl_msg.innerText = "Match draw";
    congrats();
  }
};

reset_New.addEventListener("click", () => {
  reset_New.innerText = "Reset Game";
  msj.classList.add("add-msg");
  for (let i of boxes) {
    i.innerHTML = "";
    i.disabled = false;
  }
  initial_val = "X";
  filled_boxes = 0;
});
