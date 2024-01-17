<?php
//đăng kí
include('connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$name = $obj['name'];
$email = $obj['email'];
$check_in = $obj['check_in'];
$check_out = $obj['check_out'];
$actual_price = $obj['actual_price'];
$subtotal = $obj['subtotal'];
$phone = $obj['phone'];
$rooms_id = $obj['rooms_id'];
$discount = $obj['discount'];
$created_at = date("Y-m-d H:i:s");
$code = rand(000000000,999999999);

if($name !='' && $email != ''){
    $sqlid = "SELECT id FROM users WHERE email = '$email'";
    $result = $mysqli->query($sqlid);
    $user = $result->fetch_assoc();
    $user_id = $user['id'];

    $sql = "INSERT INTO bookings
    (rooms_id,user_id,check_in,check_out,persion,number_of_rooms,total_night,actual_price,subtotal,discount,total_price,payment_method,payment_status,name,email,phone,status,code,created_at)
     VALUES('$rooms_id','$user_id','$check_in','$check_out','01','01',7,'$actual_price','$subtotal','$discount','$subtotal','COD','0','$name','$email','$phone',0,'$code','$created_at')";
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