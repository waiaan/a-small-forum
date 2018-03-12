<?php
	$un=$_REQUEST["uname"];
	$conn=mysqli_connect("127.0.0.1","root","","bbs",3306);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="SELECT * FROM users WHERE uname='$un'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	if($row===null){
		echo "y";
	}else{
		echo "n";
	}
?>