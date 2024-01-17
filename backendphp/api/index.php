<?php
	include('connect/connect.php');
	
	$products = $mysqli->query('SELECT p.id ,p.roomtype_id as idType, t.name as nameType, p.price, p.total_adult, p.discount,p.image FROM rooms p inner join room_types t ON t.id = p.roomtype_id where p.status = 1 group by p.id LIMIT 0,10');
	while ($row = $products->fetch_object()){
		// $assignees = explode(',', $row->images);
		// $row->images = $assignees;
	    $room[] = $row;
	}


	$product_types = $mysqli->query("Select * from room_types");
	while ($type = $product_types->fetch_object()){
	    $product_type[] = $type;
	}
	
	$array = array('type'=>$product_type,'room'=>$room);
	echo json_encode($array);


?>