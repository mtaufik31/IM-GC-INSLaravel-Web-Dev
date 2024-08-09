// CONTOH
// Kamu diminta untuk membuat fungsi bernama tampilkan() untuk menampilkan "Aku Tampil" pada halaman html. // Jawaban CONTOH
function tampilkan() {
    document.getElementById("contohJawaban").innerHTML = "Aku Tampil" }
    tampilkan()

    function teriak() {
       return "Halo function"
    }
    document.getElementById("jawaban1").innerHTML = teriak()

    function kalikan(num1, num2) {
        return num1 * num2
    }
    document.getElementById("jawaban2").innerHTML = kalikan(5, 4)

    var nama = "BudiJago"
    var umur = "16"
    var alamat = "JL. Jago Raya"
    var hobi = "Osu"
    function buatKalimat(nama, umur, alamat, hobi) {
      var kalimatBaru = "Nama saya " + nama + " umur saya " + umur + " alamat saya " + alamat + " hobi saya " + hobi + "!";
      return(kalimatBaru)
    }
    document.getElementById("jawaban3").innerHTML = buatKalimat(nama, umur, alamat, hobi);

    var nama = "Budi";
    var umur = 18;
    var alamat = "JL. Kelapa Sawit";
    var hobi = "Bulutangkis";
    function buatKalimat(nama, umur, alamat, hobi) {
        var kalimatBaru = "Nama saya " + nama + " Umur saya " + umur + " alamat saya " + alamat + " hobi saya " + hobi + "!";
        return(kalimatBaru)
    }
    document.getElementById("jawaban3").innerHTML = buatkalimat(nama, umur, alamat. hobi)