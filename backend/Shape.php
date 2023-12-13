<?php
abstract class Shape{
    public $color;

    public function __construct($color){
        $this->color = $color;
    }

    abstract public function calculateArea();
}
?>