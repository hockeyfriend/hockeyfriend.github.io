var actPlayer = -1; // -1 = player cross 1 = player circle
var moves = 0;      //number of moves
var gMatrix = [
      null, null, null,
      null, null, null,
      null, null, null
];

/* Set a Cross when a field get clicked */
$('.field' ).on('click', setCross);

function setCross(event){
  var actField = event.target;
  var actInd = parseInt(actField.id);
  var win = false;

  if (gMatrix[actInd] == null){
      gMatrix[actInd] = actPlayer;

      if (actPlayer==-1){
        actField.setAttribute("style", 'background-image: url("pics/cross.png");');
      } else {
        actField.setAttribute("style", 'background-image: url("pics/circle.png");');
      }
      console.log(moves);
      if (moves > 3) { 
        win = checkWin(actPlayer, gMatrix);
        if(win){ window.location.reload() }
      }
      

      actPlayer = actPlayer * -1;
      moves++;
  } else { return }
}

function checkWin(symbol, array){
  var ww = 0; // count variable for a row win
  for (let i = 0; i < 7; i++) {
    if(array[i] == symbol){
      // check diagonal win
      if (i == 0 || i == 2){
        if(array[4]==symbol && (array[6]==symbol || array[8]==symbol)){ return true}
      }
      // row win if start index can be divided by 3 and every index after that is true 
      if (i % 3 == 0){
        if(array[i+1]==symbol && array[i+2]==symbol){ return true }
      }
      // colum win
      if(i<3){
        if(array[i+3]==symbol && array[i+6]==symbol){ return true }
      } else {
        i = i + 3;
      }
      
    }
  }
  return false;
}
function showArray(array){
  // show array on 3 x 3 matrix

  // array size must be 9
  if(array.length != 9){
    console.log('Array length must be 9!');
    return;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] != null){
      var e = document.getElementById(i.toString());
      if (array[i]==-1){
        e.setAttribute("style", 'background-image: url("pics/cross.png");');
      } else {
        e.setAttribute("style", 'background-image: url("pics/circle.png");');
      }
    }
  }
}
/*
showArray(
[
  -1, null, null,
  null, -1, null,
  null, null, null
]
);
*/