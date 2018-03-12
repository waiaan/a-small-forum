<?php
	$un=$_REQUEST["uname"];
	$up=$_REQUEST["upwd"];
	$reg=time()*1000;
	$conn=mysqli_connect("127.0.0.1","root","","bbs",3306);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="INSERT INTO users VALUES(NULL,'$un','$up','$reg')";
	$result=mysqli_query($conn,$sql);
	echo "y";
?>