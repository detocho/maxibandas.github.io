
// ***************************************** REGISTRO **********************************  *////
$().ready(function () {

    //var contenidoHTMLhead = '<div id="show"><div style="width:600px; text-align:right;"><a href="javascript:;" onclick="closeModal();">X</a></div><iframe width="500px" height="200px" src="';
    //var contenidoHTMLbody = '<div>Hola aqui debe de ir el captcha</div>';
    //var contenidoHTMLfother = '" frameborder="0"></iframe></div>';
    var contenidoHTML = '';
    var ancho = 400;
    var alto = 250;
    var confirmacionMailcompleta = 0;

    // verificamos que el mail sea valido
    $("input[id$='id_email']").blur(function () {
        var Mail;
        var MailValido;
        Mail = $("input[id$='id_email']").val();
        MailValido = Mail.indexOf('@', 0);
        $("#validaMail").empty();
        if ($("input[id$='id_email']").val() == "")
        {
        	$("#validaMail").empty();
        }
        if (MailValido == -1) {
            $("#validaMail").append("<p class='mensajeInvalido'>El mail no es valido</p>");
            confirmacionMailcompleta =  0;
        }else
        {
            
            var urlOriginal = "http://www.electronia.com.mx/api/Home/ValidaEmail/?email="+Mail;            
           	
			$.ajax({
 				dataType: "jsonp",
 				//url: "http://www.electronia.com.mx/api/Home/testAjax/",
 				url:urlOriginal,
 				//data: "parametro1=valor1&parametro2=valor2",
 				type: "GET",
 				//crossDomain: true,
 				//jsonpCallback:'jpCallback',
 				success: function(jsondata) {  
 				
 					$("#validaMail").empty();
  					if (jsondata[0].HttpStatusCode == "Accepted" )
  					{

  						$("#validaMail").append("<p class='mensajeValido'>Mail valido para el registro</p>");
  						confirmacionMailcompleta = 1;
  					} 
  				
  					if (jsondata[0].HttpStatusCode == "Conflict")
  					{
  						$("#validaMail").append("<p class='mensajeInvalido'>El email ya esta registrado</p>");
  						confirmacionMailcompleta = 0;
  					}
  				
 			},
 			error: function (jqXHR, textStatus, errorThrown) {
   				alert ("ocurrio un error"+ errorThrown + textStatus);
 			}
			});
		}

    });
    
    // aqui le dio click al boton de registrar
    $("input[id$='id_registrar']").click(function (evento) {
        var enviar;
        enviar = 0;
        
        // validamos el nombre
        if ($("input[id$='id_nombre']").val() == "") {
            alert("Debes ingresar un nombre valido");
            $("input[id$='id_nombre']").focus();
            return (false);
        }
        // validamos los apellidos
        else if ($("input[id$='id_apellidos']").val() == "") {
            alert("Debes ingresar un apellido valido");
            $("input[id$='id_apellidos']").focus();
            return (false);
        }
        
        
        // validamos el email
        else if ($("[id$='id_email']").val() == "") {
            alert("Debe escribir un email");
            return (false);
        }
        // validamos el email_confirm
        else if ($("[id$='id_mail_confirm']").val() == "") {
            alert("Debe confirmar que el email es correcto");
            return (false);
        }
        
        // validamos el telefono 
        else if ($("input[id$='id_telefonos']").val().length < 4) {
            alert("El telefono es invalido");
            $("input[id$='id_tel1_1']").focus();
            return (false);
        }
        // validamos el estado
        else if ($("[id$='id_estado']").val() == "0-none") {
            alert("Debe seleccionar un estado");
            return (false);
        }
        // validamos la fecha    
        else if ($("[id$='id_dia']").val() == "0" || $("[id$='id_mes']").val() == "0" || $("[id$='id_anio']").val() == "0") {
            alert("Debe seleccionar una fecha de nacimiento valida");
            $("[id$='id_dia']").focus();
            return (false);
        }
        // validamos el password
        else if ($("input[id$='id_password']").val() == "") {
            alert("Debes ingresar un password valido");
            return (false);
        }
         // validamos el e-mail
        else if (confirmacionMailcompleta == 0) {
                    alert("El email ya esta registrado");
                    $("input[id$='id_email']").focus();
                    return (false);
        }
        
        // validamos que los email coincidan        
        else if ($("[id$='id_mail_confirm']").val().length > 0) {
            
            if ($("[id$='id_mail_confirm']").val() != $("[id$='id_email']").val()) {
                    alert("Los Email no coiciden");
                    $("input[id$='id_mail_confirm']").focus();
					return (false);
                }
            
        }
       
        else {

            return (true);

        }
        


    });



    //********************************************** funcion para el manejo de el captcha *********************************************

});




// ***************************************** LOGIN **********************************  *////


$().ready(function () {

 

    // aqui le dio click al boton de entrar al login
    $("input[id$='id_Ingresar']").click(function (evento) {

        // validamos el nombre
        
        if ($("input[id$='id_emailLogin']").val() == "") {
            alert("Debes ingresar un email");
            return (false);
        }
		else if ($("input[id$='id_passLogin']").val() == "") {
            alert("Debes ingresar un password valido");
            return (false);
        }
        
        else {

            return (true);

        }
        
    });




    //********************************************** funcion para el manejo de el captcha *********************************************

});

