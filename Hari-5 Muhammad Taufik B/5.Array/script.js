function dataHandling(data) {
    var hasil = "";

    data.forEach(function(item) {
      hasil += "Nomor ID: " + item[0] + "<br>";
      hasil += "Nama Lengkap: " + item[1] + "<br>";
      hasil += "TTL: " + item[2] + " " + item[3] + "<br>";
      hasil += "Hobi: " + item[4] + "<br><br>";
    });

    return hasil;
  }

  var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
  ];

  document.getElementById("jawaban1").innerHTML = dataHandling(input);