<?php
$name = $_POST['name'];
$email = $_POST['email'];
$book = $_POST['book'];
$message = $_POST['message'];
$formcontent=" From: $name \n Favorite Book: $book \n Message: $message";
$recipient = "mattkyoung1@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>