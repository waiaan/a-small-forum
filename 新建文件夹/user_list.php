<?php
	$conn=mysqli_connect("127.0.0.1","root","","bbs",3306);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="SELECT * FROM users";
	$result=mysqli_query($conn,$sql);
	$users=mysqli_fetch_all($result,MYSQLI_ASSOC);
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
	<table border="1">
		<thead>
			<tr align="center">
				<?php
					foreach($users[0] as $k=>$i){
						echo "<td>".$k."</td>";
					}
				?>
				<td>操作</td>
			</tr>
		</thead>
		<tbody>
			<?php
					foreach($users as $i){
						echo "<tr align='center'>";
						echo "<td>".$i["uid"]."</td>";
						echo "<td>".$i["uname"]."</td>";
						echo "<td>".$i["upwd"]."</td>";
						echo "<td>".$i["pic"]."</td>";
						echo "<td>".$i["score"]."</td>";
						echo "<td>".$i["regTime"]."</td>";
						echo "<td><a id='upd' href='user_update.php?uid=$i[uid]'>修改</a> <a id='del' href='user_delete.php?uid=$i[uid]'>删除</a></td>";
						echo "</tr>";
					}
			?>
		</tbody>
	</table>
	<script>
	</script>
 </body>
</html>
