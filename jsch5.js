const btnVideo = document.getElementById("btnVideo");
btnVideo.addEventListener("click", function video() {
  alert(
    "video sawit\n\n" +
    "Kelapa sawit (Elaeis guineensis) adalah tanaman penghasil\n" +
    "minyak nabati terbesar di dunia. Indonesia merupakan\n" +
    "produsen minyak sawit terbesar, mencapai 45 juta ton/tahun."
  );
});

const btnAudio = document.getElementById('btnAudio');
    if (btnAudio) {
        btnAudio.addEventListener('click', function() {
            alert('Ini lagu sawit');
        });
    }

const gambarEl = document.getElementById("gambarSawit");
gambarEl.addEventListener("click", function gambar() {
  alert(
    "gambar sawit\n\n" +
    "Buah sawit mengandung minyak yang kaya akan vitamin E\n" +
    "dan karoten. Minyak sawit digunakan dalam produk makanan,\n" +
    "kosmetik, hingga bahan bakar biodiesel."
  );
});