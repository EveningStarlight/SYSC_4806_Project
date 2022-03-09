<?php
$servername = "Sysc4806";
$username = "root";
$password = "DWedB";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>