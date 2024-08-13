<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>String PHP</title>
</head>

<body>
    <h1>Berlatih String PHP</h1>
    <?php
    // soal 1
    echo "<h3> Soal No 1</h3>"; 
    // sentence 1
    $first_sentence = "Hello PHP!";
    echo "<b>Kalimat pertama : </b>". $first_sentence. "<br> <b> Panjang String: </b> ". strlen($first_sentence). "<br> <b> Panjang kata : </b>". str_word_count($first_sentence). "<br> <br>"; // Panjang string 10, jumlah kata: 2
    // sentence 2
    $second_sentence = "I'm ready for the challenges";
    echo "<b>Kalimat kedua : </b>". $second_sentence. "<br> <b> Panjang String: </b> ". strlen($second_sentence). "<br> <b> Panjang kata : </b>". str_word_count($second_sentence). "<br> <br>";  // Panjang string: 28, jumlah kata: 5 echo "<h3> Soal No 2</h3>"; 
    

    
    /* SOAL NO 2 Mengambil kata pada string dan karakter-karakter yang ada di dalamnya. */
    echo "<h3> Soal No 2</h3>";
    $string2 = "I love PHP";
    echo "<label>String: </label> \"$string2\" <br>";
    echo "Kata pertama: " . substr($string2, 0, 1) . "<br>"; // Lanjutkan di bawah ini 
    echo "Kata kedua: " . substr($string2, 2, 4) ; 
    echo "<br> Kata Ketiga: " . substr($string2, 7, 3); 
 
    
    echo "<h3> Soal No 3 </h3>"; /* SOAL NO 3 Mengubah karakter atau kata yang ada di dalam sebuah string. */
    $string3 = "PHP is old but sexy!";

    // $string3 = "PHP is old but awesome";

    // fungsi str_replace
    $string3 = str_replace("sexy", "awesome", $string3);
    echo "String: \"$string3\" "; 
    // OUTPUT : "PHP is old but awesome" 
    
    ?>
</body>

</html>