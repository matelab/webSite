<?php
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: GET, POST');
 header('Access-Control-Allow-Headers: Content-Type');  
	/**INCLUIMOS LAS LIBRERIAS */
	require_once "../extensions/vendor/autoload.php";
	/**TRAEMOS LAS CLASES NECESARIAS */
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	use PHPMailer\PHPMailer\SMTP;
	//require("classMailer/class.phpmailer.php");
	//require("classMailer/class.smtp.php");

	if (!empty($_POST['name']) 
		and !empty($_POST['email']) 
		and !empty($_POST['query']) ) {

	/**DATOS DE LA CUENTA Y SERVIDOR SMTP */
	$smtpHost = "c1401544.ferozo.com";  
	$smtpUsuario = "contacto@matelab.com.ar";  
	$smtpClave = "MateAmargo2019";  

	/**RECIBIMOS LOS DATOS DEL FORM */
	$first_name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['query'];

	/**Correo Electrónico de Contacto para el Usuario*/
	date_default_timezone_set("America/Argentina/Buenos_Aires");

	$mail = new PHPMailer;
	$mail->Charset = "UTF-8";
	$mail->IsSMTP();

	/**CONFIGURACIONES SMTP */
	$mail->SMTPAuth = true;
	$mail->Port = 465; 
	$mail->SMTPSecure = 'ssl';
	$mail->Host = $smtpHost; 
	$mail->Username = $smtpUsuario; 
	$mail->Password = $smtpClave;
	
	$mail->setFrom("contacto@matelab.com.ar", "MateLab");
	$mail->addReplyTo("contacto@matelab.com.ar", "MateLab");
	$mail->Subject  = "MateLab Desarrollamos tecnologia ";
	$mail->addAddress($email);
	/**GABI PONELE TU MAGIA A LA PLANTILLA DEL MAIL JAJAJA */
	$mail->msgHTML('<div style="width:100%; background:#eee; position:relative; font-family:sans-serif; padding-bottom:40px">	
						<center>								
							<img style="padding:20px; width:10%" src="http://matelab.com.ar/img/mate.png">
						</center>
						<div style="position:relative; margin:auto; width:600px; background:white; padding:20px">							
							<center>
								<img style="padding:20px; width:15%" src="https://img.icons8.com/nolan/96/000000/email.png">
								<h3 style="font-weight:100; color:#999">Gracias por Contactarte con Mate Lab</h3>
								<hr style="border:1px solid #ccc; width:80%">
                                <h4 style="font-weight:100; color:#999; padding:0 20px">En la brevedad nos prondremos en contactos para </h4>
                                <h5 style="font-weight:100; color:#999; padding:0 20px">Mate Lab Desarrollamos tecnología </h5>
								<br>
								<hr style="border:1px solid #ccc; width:80%">
								<h5 style="font-weight:100; color:#999">Si no completo ningun formularios de contacto, puede ignorar este correo electrónico y eliminarlo.</h5>
							</center>	
						</div>
					</div>');
	$envio = $mail->Send();


	/**MAIL PARA MATELAB */

	$mailMateLab = new PHPMailer;
	$mailMateLab->Charset = "UTF-8";
	$mailMateLab->IsSMTP();

	/**CONFIGURACIONES SMTP */
	$mailMateLab->SMTPAuth = true;
	$mailMateLab->Port = 465; 
	$mailMateLab->SMTPSecure = 'ssl';
	$mailMateLab->Host = $smtpHost; 
	$mailMateLab->Username = $smtpUsuario; 
	$mailMateLab->Password = $smtpClave;

	$mailMateLab->setFrom($email, $first_name);
	$mailMateLab->addReplyTo($email, $first_name);
	$mailMateLab->Subject  = "Contacto";
	$mailMateLab->addAddress('contacto@matelab.com.ar');
	/**GABI ACA LO MISMO JAJAJA*/
	$mailMateLab->msgHTML('<div style="width:100%; background:#eee; position:relative; font-family:sans-serif; padding-bottom:40px">
						<center>						
							<img style="padding:20px; width:10%" src="http://matelab.com.ar/img/mate.png">
						</center>
						<div style="position:relative; margin:auto; width:600px; background:white; padding:20px">							
							<center>
								<img style="padding:20px; width:15%" src="https://img.icons8.com/nolan/96/000000/email.png">
								<h3 style="font-weight:100; color:#999">La Persona ' . $first_name . '</h3>
								<hr style="border:1px solid #ccc; width:80%">
                                <h4 style="font-weight:100; color:#999; padding:0 20px">Envio este mensaje: ' . $message . '</h4>
                                <h5 style="font-weight:100; color:#999; padding:0 20px">Mate Lab Desarrollamos tecnología </h5>
								<br>
								<hr style="border:1px solid #ccc; width:80%">
							</center>
						</div>
					</div>');
	$envioMateLab = $mailMateLab->Send();
	/**Comprobamos que los emails fueron eviados correctamente */
	if (!$envio) {
		$error = 'No te pudimos enviar el email a tu casilla de contacto, por favor verifica tu email.';
	} else if (!$envioMateLab) {
		$error = 'Ocurrió un error inesperado con Mate Lab Por favor recargue la página.';
	}

	if (!empty($error)) {
		$return = $error;
	} else {
		$return = 'Los datos fueron enviados Correctamente.';
	}

	// Create JSON 

	echo $return;
}