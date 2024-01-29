//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";
let letrasEncontrada = 0;
esMayuscula = function (caracter) {
    let code = caracter.charCodeAt();

    // Rango de códigos ASCII correspondiente a las letras mayúsculas A-Z
    if (code >= 65 && code <= 90) {
        return true;
    } else {
        return false;
    }
}
// Función para ingresar palabras secretas 
guardarPalabra = function () {
    let palabra;
    let caracter;
    tieneMiniscula = false;
    palabra = recuperarTexto("txtSecreta")
    if (!validarPalabra(palabra)) {
        alert("DEBE INGRESAR UNA PALABRA DE CINCO LETRAS MAYUSUCLAS")
    } else {
        for (let i = 0; i < palabra.length; i++) {
            caracter = palabra.charAt(i);
            if (!esMayuscula(caracter)) {
                alert("DEBE INGRESAR UNA PALABRA DE CINCO LETRAS MAYUSUCLAS")
            }
        }
        palabraSecreta = palabra;
    }
    console.log(palabraSecreta)


}

validarPalabra = function (palabra) {
    if (palabra.length <= 5) {
        return true;
    } else {
        return false;
    }
}

mostrarLetra = function (letra, posicion) {
    //si es la possion 0 muestra en la letra en el div 0, si enn la posicion 1 muestra la letra en el div 1 asi sucesivamente 
    let div = "div" + posicion
    mostrarTexto(div, letra)
}

validar = function (letra) {

    // Recorrer cada caracter de la palabra secreta
    for (let i = 0; i < palabraSecreta.length; i++) {
        // Verificar si la letra actual coincide con la letra recibida como parámetro
        if (palabraSecreta.charAt(i) == letra) {
            // Llamar a la función mostrarLetra para mostrar la letra en la posición correspondiente
            mostrarLetra(letra, i);

            // Incrementar la variable letrasEncontradas en 1
            letrasEncontradas = +1;
        }
    }
}
ingresarLetra = function () {
    let letra;
    if (!palabraSecreta == "") {
        letra = recuperarTexto("txtLetra");
        if (esMayuscula(letra)) {
            validar(letra);
        } else {
            alert("SOLO SE ACEPTAN MAYUSCULAS")
        }
    }


}