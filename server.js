const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve file statis
app.use(express.static('public'));
app.use('/admin', express.static('admin'));

// Data checkout
let chekcutdata = [];

// Ambil data dari file JSON jika sudah ada
if (fs.existsSync('checkout.json')) {
  const file = fs.readFileSync('checkout.json', 'utf-8');
  if (file.trim() !== '') {
    try {
      chekcutdata = JSON.parse(file);
    } catch (err) {
      console.error('Gagal parse JSON:', err);
    }
  }
}

// Endpoint untuk menerima checkout
app.post('/checkout', (req, res) => {
  const { cart } = req.body;
  chekcutdata.push(cart);

  // Simpan ke file
  fs.writeFileSync('checkout.json', JSON.stringify(chekcutdata, null, 2));

  console.log("Checkout diterima:", cart);
  res.json({ message: "Checkout berhasil", data: cart });
});

// Endpoint untuk admin lihat riwayat
app.get('/admin/checkout/history', (req, res) => {
  res.json({ data: chekcutdata });
});

// Jalankan server
app.listen(PORT, () => {
  console.log("Server berhasil konek di http://localhost:" + PORT);
});
