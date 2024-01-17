<?php
require __DIR__ . '/vendor/autoload.php';
include('function.php');
include('connect/connect.php');

$key = "example_key";
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$email = $obj['email'];



    if($email != ''){
        $sqlid = "SELECT id FROM users WHERE email = '$email'";
        $result = $mysqli->query($sqlid);
        $user = $result->fetch_assoc();
        $user_id = $user['id'];
    
        $products = $mysqli->query("SELECT * FROM users WHERE id = '$user_id' ");
	while ($row = $products->fetch_object()){
		
	    $room[] = $row;
	}
       
        
    }
    else{
        echo 'KHONG_THANH_CONG';
    }
	
	
	$array = array('room'=>$room);
	echo json_encode($array);


?>