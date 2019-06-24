<?php
	ini_set( 'display_errors', 1 );
	error_reporting( E_ALL );

	$_POST = json_decode(file_get_contents('php://input'), true);
	print_r($_POST);
	var_dump($_POST);
	$from = "admin@portfolio-mv.zzz.com.ua";

	$to = "admin@portfolio-mv.zzz.com.ua";

	$subject = "От портфолио";

	$name = $_POST['name'];
	$tel = $_POST['tel'];
	$mess = $_POST['mess'];
	$skype = $_POST['skype'];
	$email = $_POST['email'];

	$message = 'Спасибо за ваше письмо ' . (isset($name)?$name:'!');
	$message1 = 'От портфолио ' . (isset($name)?$name:'').
		' Телефон: '.(isset($tel)?$tel:'').
		' Skype: '.(isset($skype)?$skype:'').
		' Email: '.(isset($email)?$email:'').
		' Message: '.(isset($mess)?$mess:'');


	$headers = "From:" . $from;

	mail($to,$subject,$message1, $headers);

//	$content = "<div class='heading heading--medium heading--padding-top heading--white'>Спасибо за ваше письмо ". (isset($name)?$name:'!') . "</div>";
//	echo $content;


