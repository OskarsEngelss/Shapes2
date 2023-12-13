<?php
include_once "Shape.php";
class Circle extends Shape{
    public $radius;

    public function __construct($color, $radius){
        parent::__construct($color);
        $this->radius = $radius;
    }

    public function calculateArea(){
        return $this->radius * $this->radius * 3.14;
    }
}
?>