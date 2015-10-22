$(function() {
	$("#enviadatos").click(function() {
		var elNombre = $("#nombre").val();
    	var elMail = $("#mail").val();
    	var elTelefono = $("#telefono").val();
		$("#nombre").val(" ");
    	$("#mail").val(" ");
    	$("#telefono").val(" ");      
        $.ajax({
        	type: "POST",
            url: "conecta.php",
            data: ({name: elNombre,mail: elMail,telefono: elTelefono}),
            cache: false,
            dataType: "text",
            success: onSuccess
        });
    });

	function onSuccess(data){
		alert(data);
	}
});