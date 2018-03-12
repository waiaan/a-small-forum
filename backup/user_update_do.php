<?php
	$uid=$_REQUEST["uid"];
	$un=$_REQUEST["uname"];
	$up=$_REQUEST["upwd"];
	$pic=$_REQUEST["pic"];
	$s=$_REQUEST["score"];
	$reg=$_REQUEST["regTime"];
	$conn=mysqli_connect("127.0.0.1","root","","bbs",3306);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="UPDATE users SET uname='$un',upwd='$up',pic='$pic',score=$s,regTime=$reg WHERE uid=$uid";
	$result=mysqli_query($conn,$sql);
	if($result===false){
		echo "error:$sql";
	}else{
		echo "done";
	}
?>
<script>
	open("user_list.php","_self");
</script>