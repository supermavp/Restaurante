$(function() {
	$("#enviadatos").click(function() {

        var laMesa = $("#mesa").val();
		var elPlato = $("#plato").val();
    	var laCantidad = $("#cantidad").val();
    	var elPrecio = $("#precio").val();
		
        $("#plato").val(" ");
    	$("#cantidad").val(" ");
    	$("#precio").val(" ");      
        $("#mesa").val(" ");

        $.ajax({
        	type: "POST",
            url: "192.168.0.11/servidor/conecta.php",
            data: ({mesa:laMesa,plato: elPlato,cantidad: laCantidad,precio: elPrecio}),
            cache: false,
            dataType: "text",
            success: onSuccess
        });
    });

	function onSuccess(data){
		alert(data);
	}
});