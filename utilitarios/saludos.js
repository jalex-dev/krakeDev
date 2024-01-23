
saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombre = recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellido = recuperarTexto("txtApellido");

    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido;
    mostrarTexto("lblResultado",mensajeBienvenida);
    mostrarImagen("imgSaludo","./imagenes/saludo.gif")
}
mostrarTexto=function(idComponente, mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}
mostrarImagen=function(idComponente,rutaImagen){
    let imagen;
    imagen=document.getElementById(idComponente);
    imagen.src=rutaImagen;
}

recuperarInt = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja) ;
    return valorEntero;
}
recuperarFloat = function(idComponente){
    let valorEntero = recuperarTexto(idComponente);
    let valorDecimal = parseFloat(valorEntero);
    return valorDecimal;
}