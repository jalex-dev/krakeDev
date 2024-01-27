/**
 * Determina si la letra proporcionada como parámetro es una letra mayúscula.
 * 
 * La función obtiene el código ASCII de la letra, verifica si el código está dentro del rango
 * correspondiente a las letras mayúsculas (A-Z). Se consideran las mayúsculas sin tildes.
 * 
 * @param {string} caracter - La letra a evaluar.
 * @returns {boolean} - True si el caracter es una letra mayúscula, de lo contrario, False.
 */
esMayuscula=function(caracter) {
    let code = caracter.charCodeAt();

    // Rango de códigos ASCII correspondiente a las letras mayúsculas A-Z
    if (code >= 65 && code <= 90) {
        return true;
    } else {
        return false;
    }
}
/**
 * Determina si el carácter proporcionado como parámetro es un dígito.
 * 
 * La función obtiene el código ASCII del carácter y verifica si el código está
 * dentro del rango correspondiente a los dígitos (0-9).
 * 
 * @param {string} caracter - El carácter a evaluar.
 * @returns {boolean} - True si el carácter es un dígito, de lo contrario, False.
 */
esDigito=function(caracter) {
    let code = caracter.charCodeAt();

    // Rango de códigos ASCII correspondiente a los dígitos 0-9
    if (code >= 48 && code <= 57) {
        return true;
    } else {
        return false;
    }
}
/**
 * Determina si el caracter proporcionado como parámetro es un guion ("-").
 * 
 * La función obtiene el código ASCII del caracter y verifica si el código
 * corresponde al guion ("-").
 * 
 * @param {string} caracter - El caracter a evaluar.
 * @returns {boolean} - True si el caracter es un guion, de lo contrario, False.
 */
esGuion = function(caracter) {
    let code = caracter.charCodeAt();

    // Compara el código ASCII con el valor correspondiente al guion ("-")
    if (code === 45) {
        return true;
    } else {
        return false;
    }
};