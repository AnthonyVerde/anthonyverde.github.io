<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Anthony Green Design'; 
    $to = 'howdy@anthonygreen.design'; 
    $subject = 'New inquiry from Anthony Green Design!';
			
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['submit']) {
        if ($name != '' && $email != '') {			 
            if (mail ($to, $subject, $body, $from)) { 
                echo '<p>Your message has been sent!</p>';
            } else { 
                echo '<p>Something went wrong, go back and try again!</p>'; 
            } 
        } else {
            echo '<p>Please fill in all required fields.</p>';
        }
    }
    }
?>