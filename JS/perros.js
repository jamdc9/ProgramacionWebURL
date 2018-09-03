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
    $("#divJumper").attr('class', 'invisible text-center');
    $("#divFamilia").attr('class', 'invisible text-center');
    $("#divAmigos").attr('class', 'invisible text-center');

    $("#divBlacky").css('display', 'none');
    $("#divBrownie").css('display', 'block');
    $("#divJumper").css('display', 'none');
    $("#divFamilia").css('display', 'none');
    $("#divAmigos").css('display', 'none');
    /*Cambiamos los botones*/
    $("#btBrownie").attr('class', 'btn btn-primary navbar-btn');
    $("#btBlacky").attr('class', 'btn btn-secondary navbar-btn');
    $("#btJumper").attr('class', 'btn btn-secondary navbar-btn');
    $("#btFamilia").attr('class', 'btn btn-secondary navbar-btn');
    $("#btAmigos").attr('class', 'btn btn-secondary navbar-btn');
  });
  
  $("#btBlacky").click(function() {
    console.log('Entro al click');
    /*Cambiamos los Divs*/
    $("#divBlacky").attr('class', 'visible text-center');
    $("#divBrownie").attr('class', 'invisible text-center');
    $("#divJumper").attr('class', 'invisible text-center');
    $("#divFamilia").attr('class', 'invisible text-center');
    $("#divAmigos").attr('class', 'invisible text-center');

    $("#divBlacky").css('display', 'block');
    $("#divBrownie").css('display', 'none');
    $("#divJumper").css('display', 'none');
    $("#divFamilia").css('display', 'none');
    $("#divAmigos").css('display', 'none');
    /*Cambiamos los botones*/ 
    $("#btBlacky").attr('class', 'btn btn-primary navbar-btn');
    $("#btBrownie").attr('class', 'btn btn-secondary navbar-btn');
    $("#btJumper").attr('class', 'btn btn-secondary navbar-btn');
    $("#btFamilia").attr('class', 'btn btn-secondary navbar-btn');
    $("#btAmigos").attr('class', 'btn btn-secondary navbar-btn');
  });
  $("#btJumper").click(function() {
    console.log('Entro al click');
    /*Cambiamos los Divs*/
    $("#divBlacky").attr('class', 'invisible text-center');
    $("#divBrownie").attr('class', 'invisible text-center');
    $("#divJumper").attr('class', 'visible text-center');
    $("#divFamilia").attr('class', 'invisible text-center');
    $("#divAmigos").attr('class', 'invisible text-center');

    $("#divBlacky").css('display', 'none');
    $("#divBrownie").css('display', 'none');
    $("#divJumper").css('display', 'block');
    $("#divFamilia").css('display', 'none');
    $("#divAmigos").css('display', 'none');
    /*Cambiamos los botones*/ 
    $("#btBlacky").attr('class', 'btn btn-secondary navbar-btn');
    $("#btBrownie").attr('class', 'btn btn-secondary navbar-btn');
    $("#btJumper").attr('class', 'btn btn-primary navbar-btn');
    $("#btFamilia").attr('class', 'btn btn-secondary navbar-btn');
    $("#btAmigos").attr('class', 'btn btn-secondary navbar-btn');
  });
  $("#btFamilia").click(function() {
    console.log('Entro al click');
    /*Cambiamos los Divs*/
    $("#divBlacky").attr('class', 'invisible text-center');
    $("#divBrownie").attr('class', 'invisible text-center');
    $("#divJumper").attr('class', 'invisible text-center');
    $("#divFamilia").attr('class', 'visible text-center');
    $("#divAmigos").attr('class', 'invisible text-center');

    $("#divBlacky").css('display', 'none');
    $("#divBrownie").css('display', 'none');
    $("#divJumper").css('display', 'none');
    $("#divFamilia").css('display', 'block');
    $("#divAmigos").css('display', 'none');
    /*Cambiamos los botones*/ 
    $("#btBlacky").attr('class', 'btn btn-secondary navbar-btn');
    $("#btBrownie").attr('class', 'btn btn-secondary navbar-btn');
    $("#btJumper").attr('class', 'btn btn-secondary navbar-btn');
    $("#btFamilia").attr('class', 'btn btn-primary navbar-btn');
    $("#btAmigos").attr('class', 'btn btn-secondary navbar-btn');
  });
  $("#btAmigos").click(function() {
    console.log('Entro al click');
    /*Cambiamos los Divs*/
    $("#divBlacky").attr('class', 'invisible text-center');
    $("#divBrownie").attr('class', 'invisible text-center');
    $("#divJumper").attr('class', 'invisible text-center');
    $("#divFamilia").attr('class', 'invisible text-center');
    $("#divAmigos").attr('class', 'visible text-center');

    $("#divBlacky").css('display', 'none');
    $("#divBrownie").css('display', 'none');
    $("#divJumper").css('display', 'none');
    $("#divFamilia").css('display', 'none');
    $("#divAmigos").css('display', 'block');
    /*Cambiamos los botones*/ 
    $("#btBlacky").attr('class', 'btn btn-secondary navbar-btn');
    $("#btBrownie").attr('class', 'btn btn-secondary navbar-btn');
    $("#btJumper").attr('class', 'btn btn-secondary navbar-btn');
    $("#btFamilia").attr('class', 'btn btn-secondary navbar-btn');
    $("#btAmigos").attr('class', 'btn btn-primary navbar-btn');
  });
});
