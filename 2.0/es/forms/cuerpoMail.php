<?php
$cuerpoMail =
"<html lang'es'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>
<body bgcolor='#6c757d'>
<br>
    <table bgcolor='#ac1bc6' align='center' width='800px' height='20px'>
				<tr>
					<td>
						<font face='arial'color='#ffffff' align='center'>
							<h1>Consulta</h1>
						</font>
					</td>
				</tr>
		</table>
		<table bgcolor='#343a40' align='center' width='800px' height='200px' bordercolor=' #ac1bc6' border='2'cellspacing='3' cellpadding='3'>
			<tr height='30px'>
				<td width='15%'><font face='arial'color='#ffffff'><p>Nombre:</p></font></td>
				<td width='35%'><font face='arial'color='#ffffff'><p>{$nombre}</p></font></td>
			</tr>
			<tr height='30px'>
				<td width='25%'><font face='arial'color='#ffffff'><p>Email:</p></font></td>
				<td width='35%'><font face='arial'color='#ffffff'><p>{$email}</p></font></td>
                <td width='15%'><font face='arial'color='#ffffff'><p>Asunto:</p></font></td>
				<td width='25%'><font face='arial'color='#ffffff'><p>{$asunto}</p></font></td>
			</tr>
			<tr height='80px'>
                <td width='15%'><font face='arial'color='#ffffff'><p>Mensaje:</p></font></td>
				<td colspan='3'><font face='arial'color='#ffffff'><p>{$mensaje}</p></font></td>
			</tr>
		</table>
</body>
</html>";
?>
