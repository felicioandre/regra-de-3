$(function(){
    changeNumber()
    $('.campo-numero').on('change', changeNumber);
});

function changeNumber(e){
    var valor1 = $("#Valor1").val();
        var valor2 = $("#Valor2").val();
        var valor3 = $("#Valor3").val();
        var valor4 = (valor2 * valor3) / valor1;

        if(!isNaN(valor4)){
            $("#Valor4").val(valor4);
        }
}
