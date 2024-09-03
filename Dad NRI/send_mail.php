<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form inputs
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone']; // New field for phone number
    $message = $_POST['message'];

    // Validate form inputs
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo "All fields are required!";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format!";
        exit;
    }

    if (!preg_match("/^[0-9]{11}$/", $phone)) { // Adjust pattern according to your country's phone number format
        echo "Invalid phone number format!";
        exit;
    }

    // Email configuration
    $to = "abiodunsoreoluwa@gmail.com"; // Replace with your email
    $subject = "New Contact Form Submission from: " . $name;
    $headers = "From: " . $email;

    // Format message body
    $body = "You have received a new message from the contact form on your website.\n\n";
    $body .= "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Phone: " . $phone . "\n"; // Include phone number in email
    $body .= "Message:\n" . $message . "\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message!";
    }
} else {
    echo "Invalid request!";
}
?>
