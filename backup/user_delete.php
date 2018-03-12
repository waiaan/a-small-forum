<?php
	$uid=$_REQUEST["uid"];
	$conn=mysqli_connect("127.0.0.1","root","","bbs",3306);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="DELETE FROM users WHERE uid=$uid";
	$result=mysqli_query($conn,$sql);
	if($result===false){
		echo "error:$sql";
	}else{
		echo "done";
	}
	echo "<a href='user_list.php'></a>"
?>
<script>
	open("user_list.php","_self");
</script>