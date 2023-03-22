function login(){
             var user, password
    user=document.getElementById("usuario").value;
    password=document.getElementById("contraseña").value;

    if ( user == "jsduran" && password == "6543210"){
      window.location="index.html"
    }else{
        alert("Datos incorrectos")
    }
}