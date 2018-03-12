<?php
	$un=$_REQUEST["uname"];
	$up=$_REQUEST["upwd"];
	$conn=mysqli_connect("127.0.0.1","root","","bbs",3306);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="SELECT uid FROM users WHERE uname='$un' AND upwd='$up'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	if($row===null){
	echo "n";	
	}else{
		echo $row['uid'];
	}
?>