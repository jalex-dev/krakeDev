//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula=function(caracter) {
    let code = caracter.charCodeAt();

    // Rango de códigos ASCII correspondiente a las letras mayúsculas A-Z
    if (code >= 65 && code <= 90) {
        return true;
    } else {
        return false;
    }
}