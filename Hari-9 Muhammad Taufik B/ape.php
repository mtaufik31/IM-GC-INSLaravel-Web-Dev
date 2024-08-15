<?php
    require_once "animal.php";

    class Ape extends Animal {
        public function get_yell() {
            echo "Yell: Auoo!";
        }
    }   