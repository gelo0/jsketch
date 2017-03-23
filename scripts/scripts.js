$(document).ready(function(){
  var size = 16
  $("body").append("<div id=\"container\"></div>");
  createGrid(size);
  draw();
  $('#gridsize').click(function(){
    changeGrid();
  });
});

//functions

function createGrid(gridSize){
  for (i=0; i < gridSize; i++){
    for (j=0; j < gridSize; j++){
      $('<div />', {'class' : 'unit'}).appendTo('#container');
    }
  }
  $('.unit').height(600/gridSize).width(600/gridSize);

  //$('body > div').find('div').append('<div></div>');
}
function draw(){
  $('.unit').mouseover(function(){
    $(this).css('background-color', 'black');
  });
}
function changeGrid(){
  size = prompt("Enter number of grids");
  createGrid(size);
  reset();
}
function reset(){
  $('.unit').css('background-color', 'red');
}
