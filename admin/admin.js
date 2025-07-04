const  form = document.getElementById("form")
const user = document.getElementById("username")
const pass = document.getElementById("inputPassword")


form.addEventListener("submit",function(x){
    x.preventDefault()
    const dtuser = user.value.trim()
    const dtpw = pass.value.trim()
    //validasi inpur kosong
    
    if(user =="" || pass == ""){
        alert("data wajib diisi lengkap")

    }
    const admin = JSON.parse(localStorage.getItem("usernamebaru"))

    if(!admin){
        alert("anda tidak bisa masuk")
    }
    if(admin.usernamebaru===dtuser && admin.userpassbaru === dtpw) {
        alert("login berhasil")
        window.location.href = "admin.html"
    } else {
        alert("akses ditolak")
    }
})