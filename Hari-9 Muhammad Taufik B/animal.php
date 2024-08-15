<?php
class Animal
{
  public $name,
    $legs,
    $cold_blooded;

  function __construct($name= "name", $legs= 4, $cold_blooded= "no")
  {
      $this->name = $name;
      $this->legs = $legs;
      $this->cold_blooded = $cold_blooded;
  }
    function get_name() {
        return $this->name;
      }
    function get_legs() {
      return $this->legs;
    }
        
    function get_cold_blooded() {
      return $this->cold_blooded;
    }

    public function Hewan() {
      echo "Name: ". $this->get_name(). "<br>";
      echo "Legs: ". $this->get_legs(). "<br>";
      echo "Cold Blooded: ". $this->get_cold_blooded(). "<br>";
    }
}
