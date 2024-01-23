mostrarTexto=function(idComponente, mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

mostraTextoEncaja=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value=mensaje;

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
