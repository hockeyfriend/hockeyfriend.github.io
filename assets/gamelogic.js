$( '.field' ).on('Click', setCross);

function setCross(event){
  var actField = event.target;
  actField.setAttribute("style", 'background-image: url("pics/cross.png");');
}