var form = document.getElementById("formConditional");
    var jawaban = document.getElementById("jawaban");

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      /*ATURAN PERMAINAN
    // Output untuk Input nama = '' dan peran = '' // => "Nama harus diisi!"

    //Output untuk input jika nama != '' dan peran = '' // => "Halo Mikael, Pilih peranmu untuk memulai game!"

    //Output untuk Input jika nama != '' dan peran 'Penyihir' // => "Selamat datang di Dunia Werewolf, Nina"

    // => "Halo Penyihir Nina, kamu dapat melihat siapa yang menjadi Werewolf!"

    //Output untuk Input jika nama != '' dan peran 'Werewolf'
    // => "Selamat datang di Dunia Werewolf, Danu"

    // "Halo Werewolf Danu, kamu dapat memilih siapa yang akan kamu makan malam ini!"

    //Output untuk Input jika nama != '' dan peran 'Rakjel' // => "Selamat datang di Dunia Werewolf, Zero"
    // => "Halo Rakjel Zero, Kamu menjadi rakyat jelata " PETUNJUK MENGERJAKAN
    1. Buat Kondisional agar output dari konsol sesuai yang diharapkan
    2. masukkan lah jawaban dari kondisi yang diberikan oleh User ke dalam variabel jawabanKonsol */
      
      // Mengambil nilai dari inputan nama dan peran
      var name = document.getElementById("name").value;
      var role = document.getElementById("role").value;

      // Variabel untuk menyimpan jawaban dari kondisi
      var jawabanKonsol = ""; 

      // Kondisional berdasarkan nilai name dan role
      if (name === "" && role === "") {
        jawabanKonsol = "Nama harus diisi!";
      } else if (name !== "" && role === "") {
        jawabanKonsol = `Halo ${name}, pilih peranmu untuk memulai game!`;
      } else if (role === "Penyihir") {
        jawabanKonsol = `Selamat datang di Dunia Werewolf, ${name}<br>Halo Penyihir ${name}, kamu dapat melihat siapa yang menjadi Werewolf!`;
      } else if (role === "Werewolf") {
        jawabanKonsol = `Selamat datang di Dunia Werewolf, ${name}<br>Halo Werewolf ${name}, kamu dapat memilih siapa yang akan kamu makan malam ini!`;
      } else if (role.toLowerCase() === "rakyat") {
        jawabanKonsol = `Selamat datang di Dunia Werewolf, ${name}<br>Halo Rakyat ${name}, kamu menjadi rakyat jelata.`;
      } else {
        jawabanKonsol = `Halo ${name}, peran ${role} tidak tersedia di dalam game.`;
      }

      // Tampilkan jawaban di halaman
      jawaban.innerHTML = jawabanKonsol;
    });