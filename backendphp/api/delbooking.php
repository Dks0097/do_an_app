<?php
//dang nhap
use \Firebase\JWT\JWT;
require __DIR__ . '/vendor/autoload.php';
include('function.php');
include('connect/connect.php');

$key = "example_key";
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$email = $obj['email'];
$id = $obj['id'];

if($id !='' && $email != ''){
	    $sqlid = "SELECT id FROM users WHERE email = '$email'";
        $result = $mysqli->query($sqlid);
        $user = $result->fetch_assoc();
        $user_id = $user['id'];
    
	
    $sql = "DELETE FROM bookings WHERE id = '$id' AND user_id = '$user_id'";
    $result = $mysqli->query($sql);
		if($result){
			echo 'THANH_CONG';
		}
		else{
			echo 'KHONG_THANH_CONG';
		}
	
}
else{
	echo 'KHONG_THANH_CONG';
}



?>