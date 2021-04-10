<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['id'];
$message= $_POST['message'];
$number = $_POST['phone'];
$to = "taabishshaikh2@gmail.com";
$subject = $_POST['subject'];
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Mobile Number=". $number . "\r\n Subject=". $subject . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" ;
"CC: amafhhenterprises3@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location: /html/landing_page.html");
?>