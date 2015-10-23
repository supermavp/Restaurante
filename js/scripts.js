//declare and initialize the counter outside of the function
var h8=0,h10=0,h12=0;

function clickH8(){
    h8++;
    $('#ph8').val(h8);
    $('#ph8').attr("value",h8);
}

function clickH10(){
    h10++;
    $('#ph10').val(h10);
    $('#ph10').attr("value",h10);
}

function clickH12(){
    h12++;
    $('#ph12').val(h12);
    $('#ph12').attr("value",h12);
}

function limpiar(){
    h8=0,h10=0,h12=0;
    $('#ph8').val(h8);
    $('#ph8').attr("value",h8);
    $('#ph10').val(h10);
    $('#ph12').val(h12);
}

function enviarDatos(){
    var cph8 = $('#ph8').val();
    var tph8 = "PH8/15000";
    var cph10 = $('#ph10').val();
    var tph10 = "PH10/20000";
    var cph12 = $('#ph12').val();
    var tph12 = "PH12/25000";

    var mph = tph8+"/"+cph8+"-"+tph10+"/"+cph10+"-"+tph12+"/"+cph12;
    //alert(mph);

    var res = mph.split("-");
    var i=0
    for(i=0;i<res.length;i++){
        //alert(res[i]);
        var miMesa = "001";
        var miPedido = res[i].split("/");
        var miPlato = miPedido[0];
        var miPrecio = miPedido[1];
        var miCant = miPedido[2];

        alert("Mesa: "+miMesa+"\nPrecio: $"+miPrecio+"\nPlato: "+miPlato+"\nCantidad: "+miCant);
        
        var miJSON = JSON.encode()
    }

    limpiar();
}

function onSuccess(data){
    alert(data);
}