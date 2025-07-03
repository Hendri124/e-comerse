    function daftar(){
    const usernamebaru = document.getElementById("username").value;
    const userpassbaru = document.getElementById("inputpassword").value;
    const data = {usernamebaru,userpassbaru}
    localStorage.setItem("username",JSON.stringify(data))
    alert("berhasil")
    window.location.href = "login.html"
    }
