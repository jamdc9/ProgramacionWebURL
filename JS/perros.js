/*
git status
git add .
git commit -m "Comentario"
git push origin master (me puede pedir login)
*/
$(document).ready(function(){

  $("#btBrownie").click(function() {
    console.log('Entro al click');
    /*Cambiamos los Divs*/
    $("#divBlacky").attr('class', 'invisible text-center');
    $("#divBrownie").attr('class', 'visible text-center');
    $("#divBlacky").css('display', 'none');
    $("#divBrownie").css('display', 'block');
    /*Cambiamos los botones*/
    $("#btBrownie").attr('class', 'btn btn-primary navbar-btn');
    $("#btBlacky").attr('class', 'btn btn-secondary navbar-btn');
  });
  
  $("#btBlacky").click(function() {
    console.log('Entro al click');
    /*Cambiamos los Divs*/
    $("#divBlacky").attr('class', 'visible text-center');
    $("#divBrownie").attr('class', 'invisible text-center');
    $("#divBlacky").css('display', 'block');
    $("#divBrownie").css('display', 'none');
    /*Cambiamos los botones*/ 
    $("#btBlacky").attr('class', 'btn btn-primary navbar-btn');
    $("#btBrownie").attr('class', 'btn btn-secondary navbar-btn');
  });

});
