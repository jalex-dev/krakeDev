//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
esMayuscula=function(caracter) {
    let code = caracter.charCodeAt();

    // Rango de códigos ASCII correspondiente a las letras mayúsculas A-Z
    if (code >= 65 && code <= 90) {
        return true;
    } else {
        return false;
    }
}
// Función para ingresar palabras secretas 
guardarPalabra=function(){
    let palabra;
    let caracter;
    tieneMiniscula = false;
    palabra = recuperarTexto("txtSecreta")
    if (!validarPalabra(palabra)) {
        alert("DEBE INGRESAR UNA PALABRA DE CINCO LETRAS MAYUSUCLAS")
    }else{
        for (let i = 0; i < palabra.length; i++) {
            caracter = palabra.charAt(i);
            if (!esMayuscula(caracter)) {
                alert("DEBE INGRESAR UNA PALABRA DE CINCO LETRAS MAYUSUCLAS")
            }    
        }  
        palabraSecreta=palabra;     
    }
    console.log(palabraSecreta)

}

validarPalabra=function(palabra) {
    if (palabra.length  <= 5) {
        return true;
    } else {
        return false;
    }
}