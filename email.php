<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	
	if(isset($_GET['email']) && !empty($_GET['email'])){
		//require 'C:\xampp\htdocs\composer\vendor\autoload.php';

		require 'C:\PHPMailer\src\Exception.php';
		require 'C:\PHPMailer-6.0.7\src\PHPMailer.php';
		require 'C:\PHPMailer-6.0.7\src\SMTP.php';
		$mail = new PHPMailer();


		$nome = $_GET['name'];
		$email = $_GET['email'];
		$assunto = $_GET['assunto']; 
		$mensagem = $_GET['message'];

		$subjet = "Contato - Fale conosco";
		$body = "<p> Contato realizado por ".$nome." ( ".$email." ) através do site. \r\n</p>".
				"<p><strong>Assunto: </strong>".$assunto."\r\n</p>".
				"<p><strong>Mensagem: </strong>".$mensagem."\r\n</p>";	
				
		$header = "From: ".$email. "\r\n".
				  "Reply-to:".$email. "\r\n"."X=Mailer:PHP/".phpversion();

		$mail->setFrom('pdcasesistemas@gmail.com');
		$mail->addAddress('danubia.paiva@pdcase.com.br');
		$mail->Subject = $subjet;
		$mail->Body = utf8_decode($body);//'<h2>Hello!</h2><p style="color:Blue;">'.$message.'</p>';
		

		$mail->isHTML(true);
		$mail->AltBody = "This message is generated by plain text !";
		$mail->IsSMTP();	
		$mail->SMTPDebug = SMTP::DEBUG_SERVER; 
		$mail->SMTPDebug = 2; //Alternative to above constant


		$mail->SMTPSecure = 'ssl';
		$mail->Host = 'smtp.gmail.com';
		$mail->SMTPAuth = true;     
		$mail->Port = 465;
		$mail->Username = 'pdcasesistemas@gmail.com';
		$mail->Password = 'PDCASE2019';
		$mail->FromName = 'PD Case - Contato'; //Nome que será exibido
		try{
			if(!$mail->send()) {
			  echo "<html><head><title>Ocorreu Um ERRO !!!</title></head>";	  
			  echo 'Seu email não foi enviado. Tente novamente!';
			  echo 'Email error: ' . $mail->ErrorInfo;
			} else {	
			  echo "<br><br><br>";	
			  echo "<center>Seu email foi enviado com sucesso. Aguarde que em breve entraremos em contato</center>";	
			}
		} catch (Exception $e) {
			  echo "<center>Seu email foi enviado com sucesso. Aguarde que em breve entraremos em contato</center>";	
		} finally {
			echo "açdkfsdçfksdaçlfksdlçffdsçklgjdsf";	
		}
	}
	else{
		echo"<center>Existem campos obrigatórios não informados</center>";
	}

?>