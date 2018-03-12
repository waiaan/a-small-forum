<?php
	header("Content-Type:application/json;charset=UTF-8");
	$t=$_REQUEST['tid'];
	$conn=mysqli_connect("127.0.0.1","root","","bbs",3306);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="SELECT * FROM threads WHERE tid=$t";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	echo json_encode($row);
?>