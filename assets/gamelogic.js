$( '.field' ).on('Click', function(event){
  var actField = event.target;
  actField.setAttribute("style", 'background-image: url("pics/cross.png");');
});