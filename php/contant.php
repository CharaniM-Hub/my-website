<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
  
        $to = 'charanimadushika20@example.com'; 
  
        $subject = 'New Contact Form Message';
  
        $message_body = "
        Name: $name
        Email: $email
        Phone: $phone
        Message: $message
        ";
  
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
  
        if (mail($to, $subject, $message_body, $headers)) {
            echo 'Your message has been sent successfully!';
        } else {
            echo 'Oops! Something went wrong. Please try again later.';
        }
    }
?>