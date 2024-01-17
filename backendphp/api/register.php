<?php
//đăng kí
include('connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$name = $obj['name'];
$email = $obj['email'];
$password = password_hash($obj['password'], PASSWORD_DEFAULT);


if($name !='' && $email != '' && $password!=''){
	
	$checkEmail = "SELECT * FROM users WHERE email='$email'";
	$checkResult = $mysqli->query($checkEmail);
	
	if($checkResult->num_rows > 0){
		echo 'EMAIL_DA_TON_TAI';
	}
	else{
		$sql = "INSERT INTO users(email,password,name,role,status) VALUES('$email','$password','$name','user','active')";
		$result = $mysqli->query($sql);
		if($result){
			echo 'THANH_CONG';
		}
		else{
			echo 'KHONG_THANH_CONG';
		}
	}
}
else{
	echo 'KHONG_THANH_CONG';
}


?>