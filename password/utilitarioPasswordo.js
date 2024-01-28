validarClave=function(clave) {
    if (clave.length >= 8 && clave.length <= 16) {
        return true;
    } else {
        return false;
    }
}

esMayuscula=function(caracter) {
    let code = caracter.charCodeAt();

    // Rango de códigos ASCII correspondiente a las letras mayúsculas A-Z
    if (code >= 65 && code <= 90) {
        return true;
    } else {
        return false;
    }
}
esDigito=function(caracter) {
    let code = caracter.charCodeAt();

    // Rango de códigos ASCII correspondiente a los dígitos 0-9
    if (code >= 48 && code <= 57) {
        return true;
    } else {
        return false;
    }
}

esCaracterEspeciales = function(caracter) {
    let code = caracter.charCodeAt();

    // Compara el código ASCII con el valor correspondiente al guion ("-")
    if (code >=33 && code<=47) {
        return true;
    } else {
        return false;
    }
};