/* Set a Cross when a field get clicked */
$( '.field' ).on('click', setCross);

function setCross(event){
  var actField = event.target;
  actField.setAttribute("style", 'background-image: url("pics/cross.png");');
}