<?php
	header("Content-Type:application/plain;charset=UTF-8");
	$t=$_REQUEST['ttitle'];
	$c=$_REQUEST['tcont'];
	$b=$_REQUEST['bid'];
	$u=$_REQUEST['uname'];
	$ti=time()*1000;
	$conn=mysqli_connect("127.0.0.1","root","","bbs",3306);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="INSERT INTO threads VALUES(NULL,$b,'$u','$t','$c',$ti)";
	$result=mysqli_query($conn,$sql);
?>