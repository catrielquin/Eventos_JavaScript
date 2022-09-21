function cierrame(){
    // encuentra el elemento
    x = document.getElementById("demo");
    //opcion 1 : cambia el estilo del atrivuto directamente
  //  x.style.display ="none";
    //opcion2 :  cambiar la clase
    x.className ="closed"
}

function abreme(){
    // encuentra el elemento
    x = document.getElementById("demo");
    //opcion 1 : cambia el estilo del atrivuto directamente
  //  x.style.display ="block";
    //opcion2 :  cambiar la clase
    x.className ="open"
}