    const form  = document.getElementById("form").addEventListener("submit",function(x){
        x.preventDefault()
    const usernamebaru = document.getElementById("username").value;
    const userpassbaru = document.getElementById("inputPassword").value;
    const data = {usernamebaru,userpassbaru}
    localStorage.setItem("usernamebaru",JSON.stringify(data))
    alert("berhasil")
    window.location.href = "login.html"
     }) 
    
