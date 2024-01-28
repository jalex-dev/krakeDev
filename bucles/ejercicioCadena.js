ejercicioPrueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
ejercicioPrueba2 = function () {
    let mensaje;
    let cadenaInvertida;
    mensaje = recuperarTexto("txtCadena");
    cadenaInvertida = invertirCadena(mensaje);
    mostrarTexto("lblCadenaInvertida", cadenaInvertida)
}
recorrerCadena = function (cadena) {
    //1234
    //juan
    let caracter;
    for (let index = 0; index < cadena.length; index++) {
        caracter = cadena.charAt(index);
        console.log("Caracter " + caracter + " posicion " + index);
    }
    for (let posicion = 0; posicion <= cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " posicion " + posicion);
    }

}
invertirCadena = function (cadena) {
    let cadenaInvertida = "";
    for (let x = cadena.length - 1; x >= 0; x--) {
        cadenaInvertida += cadena.charAt(x);
    }
    return cadenaInvertida;

}
buscarLetra = function (cadena, letra) {
    let letraInterada;
    let existeLetra = false;
    for (let i = 0; i < cadena.length; i++) {
        letraInterada = cadena.charAt(i)
        if (letraInterada == letra) {
            existeLetra = true;
        }
    }
    return existeLetra;
}

contarMayusculas = function (cadena) {
    let contadorMayuscula = 0;
    let letra;
    for (let j = 0; j < cadena.length; j++) {
        letra = cadena.charAt(j)
        if (esMayuscula(letra)) {
            contadorMayuscula = contadorMayuscula + 1;
        }
    }
    console.log(contadorMayuscula)


}

esMayuscula = function (caracter) {
    let code = caracter.charCodeAt();

    // Rango de códigos ASCII correspondiente a las letras mayúsculas A-Z
    if (code >= 65 && code <= 90) {
        return true;
    } else {
        return false;
    }
}