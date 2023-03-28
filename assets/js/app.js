var rows = 3;
var columns = 3;

var current;
var blank;
var currentID;
var blankID;

var tunrs = 0;

var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
blankID = imgOrder.indexOf("9");

//Begin
window.onload = function () {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      let id = imgOrder.shift();
      tile.id = id;
      tile.src = "/assets/img/test/img-" + id + ".png";
      tile.className = "item";

      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);
      tile.addEventListener("mouseenter", mouseEnter);

      document.getElementById("board").append(tile);
    }
  }
};

const mouseEnter = (e) => {
  current = e.target;
  // current.removeEventListener("dragstart", dragStart);
  // current.removeEventListener("dragend", dragEnd);
  // current.removeEventListener("dragover", dragOver);
  let id = current.id;
};

const dragStart = (e) => {
  current = e.target;
  currentID = imgOrder.indexOf(current.id);
};
const dragOver = (e) => {
  e.preventDefault();
};
const dragEnter = (e) => {
  e.preventDefault();
};
const dragLeave = () => {};
const dragDrop = (e) => {
  blank = e.target;
};
const dragEnd = () => {
  let temp_src = current.src;
  current.src = blank.src;
  blank.src = temp_src;

  let temp_id = current.id;
  current.id = blank.id;
  blank.id = temp_id;
};
