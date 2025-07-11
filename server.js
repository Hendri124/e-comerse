const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const PORT = 3000;
const bcrypt = require('bcryptjs');
const { use } = require('react');

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

app.post('/admin/login', (req,res) => {
  const {username,password} = req.body;
  if(!fs.existsSync ('usern.json'))  {
    return res.status(500).json({message: 'flle tidak ditemukan'})
  }
  const file = 
  fs.readFileSync('usern.json','utf-8')
  const usern = JSON.parse(file)

  const user = usern.find(u => u.username === username)

  if(!user){
    return res.status(401).json({message : 'usenamme tidal ditemukan'})
  }9090
  const isMatch = bcrypt.compareSync(password,user.password) 
  if(!isMatch){
    return res.status(401).json({message : 'password tidak valid'})
  }
  res.json({message : 'login berhasil',token :'admin-token'})
  })

// Jalankan server
app.listen(PORT, () => {
  console.log("Server berhasil konek di http://localhost:" + PORT);
});
