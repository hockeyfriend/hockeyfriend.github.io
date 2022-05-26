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
  
  if (gMatrix[actInd] == null){
      gMatrix[actInd] = actPlayer;

      if (actPlayer==-1){
        actField.setAttribute("style", 'background-image: url("pics/cross.png");');
      } else {
        actField.setAttribute("style", 'background-image: url("pics/circle.png");');
      }
      actPlayer = actPlayer * -1;
  } else { return }
}