ejercicioPrueba1=function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
ejercicioPrueba2=function(){
    let mensaje;
    let cadenaInvertida;
    mensaje = recuperarTexto("txtCadena");
    cadenaInvertida=invertirCadena(mensaje);
    mostrarTexto("lblCadenaInvertida",cadenaInvertida)
}
recorrerCadena=function(cadena){
    //1234
    //juan
    let caracter;
    for (let index = 0; index < cadena.length; index++) {
        caracter = cadena.charAt(index);
        console.log("Caracter "+caracter+" posicion "+index);
    }
    for (let posicion = 0; posicion <= cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER "+caracter+" posicion "+posicion);        
    }

}
invertirCadena=function(cadena){
    let cadenaInvertida = "";
    for (let x = cadena.length - 1; x >= 0; x--) {
        cadenaInvertida += cadena.charAt(x);
    }
    return cadenaInvertida;

}