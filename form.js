const user = document.getElementById("username");
const pass = document.getElementById("inputPassword")
const btn = document.getElementById("btn")

btn.addEventListener('click',function(x){
    x.preventDefault()
    //validasi inpur kosong
    const dtuser = user.value.trim()
    const dtpw = pass.value.trim()
    if(dtuser =="" || dtpw == ""){
        alert("data wajib diisi lengkap")
    }

    const nick = "admin"
    const psw = "123"

    if(dtuser === nick && dtpw === psw) {
        alert("login berhasil")
        setTimeout(function() {
        window.location.href = "index.html"
         },1000)
    } else {
        alert("login gagal")
    }
})