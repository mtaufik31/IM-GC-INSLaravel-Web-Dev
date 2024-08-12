var jawabanContoh = "";
      // Contoh untuk melakukan looping dengan for var jawabanContoh = ""
      for (var i = 0; i < 6; i++) {
        jawabanContoh += "ini adalah angka ke: " + [i] + "<br>";
      }
      document.getElementById("example").innerHTML = jawabanContoh;

      // Soal No. 1 Looping menggunakan While

      var jawaban1 = "";

      var i = 2;
      jawaban1 += "LOOPING PERTAMA<br>";
      while (i <= 20) {
        jawaban1 += i + " - I love coding<br>";
        i += 2;
      }
      /*
      Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik,kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. OUTPUT : LOOPING PERTAMA
      2 - I love coding
      4 - I love coding
      6 - I love coding
      8 - I love coding
      10 - I love coding
      12 - I love coding
      14 - I love coding
      16 - I love coding
      18 - I love coding
      20 - I love coding
      LOOPING KEDUA
      20 - I will become web developer
      18 - I will become web developer
      16 - I will become web developer
      14 - I will become web developer
      12 - I will become web developer
      10 - I will become web developer 8 - I will become web developer 6 - I will become web developer 4 - I will become web developer 2 - I will become web developer */

      i = 20;
      jawaban1 += "LOOPING KEDUA<br>";
      while (i >= 2) {
        jawaban1 += i + " - I will become web developer<br>";
        i -= 2;
      }
      // Code kamu di sini, lakukan looping dengan while
      // Driver Code, Jangan diganggu !
      document.getElementById("jawaban1").innerHTML = jawaban1;