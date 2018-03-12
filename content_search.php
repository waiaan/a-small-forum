<?php
	header("Content-Type:application/json;charset=UTF-8");
	@$t=$_REQUEST['tit'] or die;
	$conn=mysqli_connect("127.0.0.1","root","","bbs",3306);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="SELECT * FROM threads WHERE title LIKE '%$t%'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($row);
?>