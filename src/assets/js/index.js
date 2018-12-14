$(function(){

    $('body').on('change', '.campo-numero', function(e){
        console.log($(this).val());
        var valor1 = $("#Valor1").val();
        var valor2 = $("#Valor2").val();
        var valor3 = $("#Valor3").val();
        //var valor4 = $("#Valor4").val();

        var valor4 = (valor2 * valor3) / valor1;

        console.log('valor1', valor1);
        console.log('valor2', valor2);
        console.log('valor3', valor3);
        console.log('valor4', valor4);
        if(!isNaN(valor4)){
            $("#Valor4").val(valor4);
        }
    });
});
