<?php
    require_once "animal.php";
    require_once "ape.php";
    require_once "frog.php";

    $sheep = new Animal("shaun");
    $kera = new Ape("kera");
    $kodok = new Frog("kodok");

    // $sungokong = new Ape("kera sakti"); 
    // $sungokong->yell(); // "Auooo" 
    // $kodok = new Frog("buduk"); 
    // $kodok->jump(); // "hop hop" 


    $sheep->Hewan();
    echo "<br>";

    $kera->Hewan();
    echo $kera->get_yell();
    echo "<br>";
    echo "<br>";
    
    $kodok->Hewan();
    echo $kodok->get_jump();

    