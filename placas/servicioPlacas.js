let mensajeError = "";
validarEstructura = function (placa) {
    mensajeError=""
    if (placa.length != 7 && placa.length != 8) {
        mensajeError = "La placa debe contener exactamente 7 o 8 dígitos";
    } else {
        sonLetrasMayusculas(placa, 0, 3);
        // Verifica que el cuarto caracter sea un guion
        if (!esGuion(placa.charAt(3))) {
            if(mensajeError==""){
                mensajeError = mensajeError + " El cuarto caracter debe ser un guion (-)";
            }else{
                mensajeError = mensajeError + ", El cuarto caracter debe ser un guion (-)";
            }
            
        }
        if(placa.length==7){
            sonDigitos(placa,4,6)
        }else{
            sonDigitos(placa,4,7)

        }
        

    }
   
    return mensajeError;
}


sonLetrasMayusculas = function (placa, inicio, fin) {
    
    // Condición de salida: Si el contador alcanza el límite, detener la recursión.
    if (inicio >= fin) {
        return;
    }
    if (!esMayuscula(placa.charAt(inicio))) {
        console.log(mensajeErrorMayusculas( inicio))
        if(mensajeError==""){
            mensajeError=mensajeError+mensajeErrorMayusculas(inicio);
        }else{
            mensajeError=mensajeError + ", "+mensajeErrorMayusculas(inicio);
        }
    }


    // Llamada recursiva: Incrementa el contador y llama a la función nuevamente.
    sonLetrasMayusculas(placa, inicio + 1, fin);
}

sonDigitos=function(placa, inicio, fin) {
    // Condición de salida: Si el contador alcanza el límite, detener la recursión.
    if (inicio > fin) {
        return;
    }

    if (!esDigito(placa.charAt(inicio))) {
        console.log(mensajeErrorDigitos( inicio))
        if(mensajeError==""){
            mensajeError=mensajeError+mensajeErrorDigitos(inicio);
        }else{
            mensajeError=mensajeError + ", "+mensajeErrorDigitos(inicio);
        }
    }
    

    // Llamada recursiva: Incrementa el contador y llama a la función nuevamente.
    sonDigitos(placa, inicio + 1, fin);
}

mensajeErrorMayusculas = function (posicion) {

    if (posicion == 0) {
        return "El primer carácter debe ser mayuscula";
    }
    if (posicion == 1) {
        return "El segundo carácter debe ser mayuscula";
    }
    if (posicion == 2) {
        return "El tercer carácter debe ser mayuscula";
    }
}



mensajeErrorDigitos=function(posicion) {
    if (posicion === 4) {
        return "El quinto carácter debe ser un dígito";
    }
    if (posicion === 5) {
        return "El sexto carácter debe ser un dígito";
    }
    if (posicion === 6) {
        return "El séptimo carácter debe ser un dígito";
    }
    if (posicion === 7) {
        return "El octavo carácter debe ser un dígito";
    }
}

