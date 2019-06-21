<?php
	ini_set( 'display_errors', 1 );

	error_reporting( E_ALL );

	$_POST = json_decode(file_get_contents('php://input'), true);
//	print($_POST);
	print_r($_POST);
	var_dump($_POST);
	$from = "admin@portfolio-mv.zzz.com.ua";

	$to = "admin@portfolio-mv.zzz.com.ua";

	$subject = "Checking PHP mail";

	$name = $_POST['name'];
	$message = 'Спасибо за ваше письмо ' . (isset($name)?$name:'!');

	$headers = "From:" . $from;

	mail($to,$subject,$message, $headers);

	$content = "<div class='heading heading--medium heading--padding-top heading--white'>Спасибо за ваше письмо ". (isset($name)?$name:'!') . "</div>";
	echo $content;


