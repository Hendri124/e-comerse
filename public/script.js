function add(nama, harga, gambar) {
  const barang = {
    nama: nama,
    harga: harga,
    gambar: gambar
  };

  // Ambil data keranjang dari localStorage
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];

  // Tambahkan barang ke keranjang
  keranjang.push(barang);

  // Simpan kembali ke localStorage
  localStorage.setItem('keranjang', JSON.stringify(keranjang));

  // Kirim ke server
  fetch('/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cart: keranjang }) // kirim semua keranjang
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(err => console.error('Gagal kirim ke server:', err));

  // Pindah ke halaman keranjang (opsional)
  window.location.href = "keranjang.html";
}
