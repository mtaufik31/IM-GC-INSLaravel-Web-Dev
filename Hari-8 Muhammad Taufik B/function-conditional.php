<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Function</title>
</head>

<body>
    <h1>Berlatih Function PHP</h1>
    <?php
    echo "<h3> Soal No 1 Greetings </h3>";

    function greetings($nama) {
        echo "alo $nama, Selamat Datang di Garuda Cyber Institute! <br>";
    }
    greetings("Bagas"); 
    greetings("Wahyu"); 
    greetings("Budi");



    echo "<br>";
    echo "<h3>Soal No 2 Reverse String</h3>";

    function reverseString($data) {
        $reversed = "";  

        for ($i =   strlen($data) - 1; $i >= 0; $i--) { 
            $reversed .= $data[$i]; 
        }
        return $reversed;
    }

    echo reverseString("abdul") . "<br>";              
    echo reverseString("nama peserta") . "<br>";    
    echo reverseString("Garuda Cyber Institute") . "<br>"; 
    echo reverseString("We Are GC-Ins Developer") . "<br>"; 
    

    "<br>";
    echo "<h3>Soal No 3 Palindrome </h3>";

    function palindrome($string) {
        $hewan = reverseString($string);
        if ($hewan !== $string) {
            return "false";
        }
        return "true";
    }
    echo palindrome("nababan") . "<br>"; // true 
    echo palindrome("jambaban"). "<br>"; // false 
    echo palindrome("racecar") . "<br>"; // true 
    echo palindrome("civic")   . "<br>"; // true 


    
    echo "<h3>Soal No 4 Tentukan Nilai </h3>";

    function tentukan_nilai($integer) {
        if ($integer >= 85 && $integer <= 100) {
            return "Sangat Baik";
        } elseif ($integer >= 70 && $integer < 85) {
            return "Baik";
        } elseif ($integer >= 60 && $integer < 70) {
            return "cukup";
        } else {
            return "oakwwkwakwa";
        }
    }
    echo tentukan_nilai(98) ."<br>"; //Sangat Baik 
    echo tentukan_nilai(76) ."<br>"; //Baik 
    echo tentukan_nilai(67) ."<br>"; //Cukup 
    echo tentukan_nilai(43) ."<br>"; //Kurang 
    ?>
</body>

</html>