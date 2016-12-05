$(document).ready(function() {

  lightActive();
  redLight();
  yellowLight();
  greenLight();

  
});

function lightActive(){
  $('.light').on('click', function(e){
      $(this).toggleClass("active");
      console.log("background purple")
  });
}

function redLight(e){
  $(".redLight").on('click', function(e){
    $(this).toggleClass("red");
    e.stopPropagation();
  });
}


function yellowLight(e){
  $(".yellowLight").on('click', function(e){
    $(this).toggleClass("yellow");
    e.stopPropagation();
  });
}

function greenLight(e){
  $(".greenLight").on('click', function(e){
    $(this).toggleClass("green");
    e.stopPropagation();
  });
}

