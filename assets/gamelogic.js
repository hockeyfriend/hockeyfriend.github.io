/*
$( '.field' ).on('Click', setCross);
*/
/* Test paste */
const field = document.querySelector(".field");

field.addEventListener("click", setCross);

function setCross(event){
  var actField = event.target;
  actField.setAttribute("style", 'background-image: url("pics/cross.png");');
}