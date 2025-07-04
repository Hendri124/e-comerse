const user = document.getElementById("username")
const pass = document.getElementById("inputPassword")
const btn = document.getElementById("btn")

btn.addEventListener('click',function(x){
    x.preventDefault()
    const dtuser = user.value.trim()
    const dtpw = pass.value.trim()
    //validasi inpur kosong
    
    if(user =="" || pass == ""){
        alert("data wajib diisi lengkap")

    }
    const data2 =JSON.parse(localStorage.getItem("usernamebaru"))

    if(!data2){
        alert("belum teRdaftar")
    }
    if(data2.usernamebaru===dtuser && data2.userpassbaru === dtpw) {
        alert("login berhasil")
        window.location.href = "index.html"
    } else {
        alert("login gagal")
    }
})