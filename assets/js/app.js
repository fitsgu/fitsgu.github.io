var rows = 3;
var columns = 3;

var current;
var blank;
var currentID;
var blankID;

var tunrs = 0;


var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// for (let i = imgOrder.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [imgOrder[i], imgOrder[j]] = [imgOrder[j], imgOrder[i]];
// }

//Begin
window.onload = function () {
  
  imgOrder.map((values) => {
    let tile = document.createElement("img");
    let id = values;
    tile.id = id;
    tile.src = "./assets/img/animal/img-" + id + ".png";
    tile.className = "item";

    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragover", dragOver);
    tile.addEventListener("dragenter", dragEnter);
    tile.addEventListener("dragleave", dragLeave);
    tile.addEventListener("drop", dragDrop);
    tile.addEventListener("dragend", dragEnd);
    tile.addEventListener("mouseenter", mouseEnter);
    tile.addEventListener("click", mouseClick);

    document.getElementById("board").append(tile);
  });
};

const mouseEnter = (e) => {
  current = e.target;
  currentID = imgOrder.indexOf(current.id);
};

const mouseClick = (e) =>{
  blank = document.getElementById("9");
  if (isAdjacent() == true ) {

    [current.src, blank.src] = [blank.src, current.src];
    [current.id, blank.id] = [blank.id, current.id];
    [imgOrder[currentID], imgOrder[blankID]] = [imgOrder[blankID], imgOrder[currentID]];

    tunrs = tunrs + 1;
    
    document.getElementById("turn").innerText = tunrs;
      if(isCorrect() == true){
        $('#complete').modal('show');
        clearInterval(counter, ()=>{});
      }    
  }
}
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

  if(!blank.src.includes("img-9.png")) return;

  if (isAdjacent() == true ) {

    [current.src, blank.src] = [blank.src, current.src];
    [current.id, blank.id] = [blank.id, current.id];
    [imgOrder[currentID], imgOrder[blankID]] = [imgOrder[blankID], imgOrder[currentID]];

    tunrs = tunrs + 1;
    
    document.getElementById("turn").innerText = tunrs;

    if(isCorrect() == true){
      $('#complete').modal('show');
      clearInterval(counter, ()=>{});
    }
  }
};

const isAdjacent = () => {

  blankID = imgOrder.indexOf("9");

  let r2 = Math.floor(blankID / 3);
  let c2 = blankID - 3 * r2;
 
  let r = Math.floor(currentID / 3);
  let c = currentID - 3 * r;

  let moveLeft = r == r2 && c2 == c-1;
  let moveRight = r == r2 && c2 == c+1;
  let moveUp = c == c2 && r2 == r-1;
  let moveDown = c == c2 && r2 == r+1;

  return moveLeft || moveRight || moveUp || moveDown;


};

const isCorrect = () => {
  let temp = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0;i<9;i++) if(temp[i] != imgOrder[i]) return false;
  return true;
}


