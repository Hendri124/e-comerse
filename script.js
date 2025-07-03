function add(nama,harga,gambar) {
    const barang = {
        nama:nama,
        harga: harga,
        gambar: gambar
    }

    // penyimpanan data

    let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];

    //add new product

    keranjang.push(barang)

    // save to localhost

    localStorage.setItem('keranjang', JSON.stringify(keranjang))

    // go to keranjang web

    window.location.href = "keranjang.html"
}