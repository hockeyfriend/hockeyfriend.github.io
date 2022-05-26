var actPlayer = -1; // -1 = player cross 1 = player circle
var gMatrix = [
      null, null, null,
      null, null, null,
      null, null, null
]

/* Set a Cross when a field get clicked */
$('.field' ).on('click', setCross);

function setCross(event){
  var actField = event.target;
  var actInd = parseInt(actField.getAttribute("name"));
  var win = false;

  if (gMatrix[actInd] == null){
      gMatrix[actInd] = actPlayer;

      if (actPlayer==-1){
        actField.setAttribute("style", 'background-image: url("pics/cross.png");');
      } else {
        actField.setAttribute("style", 'background-image: url("pics/circle.png");');
      }
      win = checkWin(actPlayer, gMatrix);
      console.log(win);
      actPlayer = actPlayer * -1;
  } else { return }
}

function checkWin(symbol, array){
  var ww = 0; // count variable for a row win
  for (let i = 0; i < array.length; i++) {
    if(array[i] == symbol){
      // row win if start index can be divided by 3 and every index after that is true 
      if (i % 3 == 0 || ww > 0){
        ww++;
        if(ww = 3){ return true}
      }
    }
  }
}