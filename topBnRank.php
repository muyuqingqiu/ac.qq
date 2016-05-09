<?php
	header("Content-type: text/html; charset=utf-8");
	mysql_connect('localhost','root','');
	mysql_select_db('qingqiu');
	mysql_query('set names utf8');
	
	$type = $_REQUEST['type'];
	if($type == 0){
		$sql = "select * from topbnrankgm";
		$query = mysql_query($sql);
	}
	if($type == 1){
		$sql = "select * from topbnrankrm";
		$query = mysql_query($sql);
	}
	if($type == 2){
		$sql = "select * from topbnrankzh";
		$query = mysql_query($sql);
	}
	while($row = mysql_fetch_assoc($query)){
		$arr[] = $row;
	}
	echo json_encode($arr);




?>