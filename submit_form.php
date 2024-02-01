<?php
$name = $_POST["name"];$email = $_POST["email"];$dob = $_POST["dob"];$mobile = $_POST["mobile"];
$conn = mysqli_connect("localhost","root","","db") or die("connection failed");
$sql = "INSERT INTO contactus (name, email, dob, mobile) VALUES ('{$name}','{$email}','{$dob}','{$mobile}')";
$result = mysqli_query($conn,$sql) or die("Query Failed!");
mysqli_close($conn);
?>