<?php
    include('cuerpoMail.php');
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $asunto = $_POST['subject'];
    $mensaje = $_POST['message'];

    $mailUsuario = new phpmailer();
    $mailUsuario->PluginDir = "../includesMails/";
    try {
        //Server settings
        $mailUsuario->isSMTP();     
        $mailUsuario->SMTPAuth   = true;                          // Enable SMTP authentication
        $mailUsuario->Host       = 'smtp.gmail.com';    // Set the SMTP server to send through
        $mailUsuario->Username   = 'contacto@matelab.com.ar'; // SMTP username
        $mailUsuario->Password   = '';              // SMTP password
        $mailUsuario->Port       = 587;
        $mailUsuario->SetFrom('contacto@matelab.com.ar','Matelab Software Factory');
        $mailUsuario->AddAddress($email); 
        // Content
        $mailUsuario->IsHTML(true);                                  // Set email format to HTML
        $mailUsuario->Subject     = "Visitante mateWEB";
        $mailUsuario->Body        =  $cuerpoMail;
        $mailUsuario->send();
        //header('location: ../vistas/home.php'); Levantamos un alert con "mensaje enviado"???
    } catch (Exception $e) {
        echo "Error: {$e->getMessage()}";
    }
?>