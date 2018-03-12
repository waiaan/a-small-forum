<?php
	$uid=$_REQUEST["uid"];
	$conn=mysqli_connect("127.0.0.1","root","","bbs",3306);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="SELECT * FROM users WHERE uid=$uid";
	$result=mysqli_query($conn,$sql);
	$user=mysqli_fetch_assoc($result);
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
  <title> new document </title>
  <meta name="generator" content="editplus" />
  <meta name="author" content="" />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
 </head>

 <body>
   <form action="user_update_do.php">
		<input type="hidden" name="uid" value=<?php echo "$user[uid]"?>>
		用户名：<input type="" name="uname" value=<?php echo "$user[uname]"?>><br>
		密码：<input type="" name="upwd" value=<?php echo "$user[upwd]"?>><br>
		头像：<input type="" name="pic" value=<?php echo "$user[pic]"?>><br>
		<input type="hidden" name="score" value=<?php echo "$user[score]"?>><br>
		<input type="hidden" name="regTime" value=<?php echo "$user[regTime]"?>>
		<input type="submit">
	</form>
 </body>
</html>
