
// ambil data
let data =  JSON.parse(localStorage.getItem('keranjang')) || [];
const data2 = document.getElementById("data")
data.forEach(item=> {
    console.log(item)
    data2.innerHTML += `<div class"produk">
     <img src="${item.gambar}" class="card-img-top" alt="${item.nama}" style="height: 200px; object-fit: cover;">
    <h3>${item.nama}</h3>
    <p> harga : ${item.harga.toLocaleString()}</p>

    </div>`
});
