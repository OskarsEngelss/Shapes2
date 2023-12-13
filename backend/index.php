<?php
header("Access-Control-Allow-Origin: *");

include "Rectangle.php";
include "Circle.php";

$rectangle = new Rectangle("Red", 230,115);
$rectangle->{"area"} = $rectangle->calculateArea();

$circle = new Circle("Green", 115);
$circle->{"area"} = $circle->calculateArea();

echo json_encode(array($rectangle, $circle));
?>