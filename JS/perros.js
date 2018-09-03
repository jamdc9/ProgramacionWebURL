/*
git status
git add .
git commit -m "Comentario"
git push origin master (me puede pedir login)
*/
$(document).ready(function(){

  $("#liBrownie").click(function() {
    console.log('Entro al click');
    $("#divBlacky").attr('class', 'invisible text-center');
    $("#divBrownie").attr('class', 'visible text-center');
    $("#divBlacky").css('display', 'none');
    $("#divBrownie").css('display', 'block');
  });

});
