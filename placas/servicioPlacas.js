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
obternerProvincia=function(placa){

    // Obtener la primera letra de la placa (código de provincia)
    let primeraLetra = placa.charAt(0);

    // Asignar provincias basadas en la primera letra
    if (primeraLetra === "A") {
        return "Azuay";
    } else if (primeraLetra === "B") {
        return "Bolívar";
    } else if (primeraLetra === "U") {
        return "Cañar";
    } else if (primeraLetra === "C") {
        return "Carchi";
    } else if (primeraLetra === "X") {
        return "Cotopaxi";
    } else if (primeraLetra === "H") {
        return "Chimborazo";
    } else if (primeraLetra === "O") {
        return "El Oro";
    } else if (primeraLetra === "E") {
        return "Esmeraldas";
    } else if (primeraLetra === "W") {
        return "Galápagos";
    } else if (primeraLetra === "G") {
        return "Guayas";
    } else if (primeraLetra === "I") {
        return "Imbabura";
    } else if (primeraLetra === "L") {
        return "Loja";
    } else if (primeraLetra === "R") {
        return "Los Ríos";
    } else if (primeraLetra === "M") {
        return "Manabí";
    } else if (primeraLetra === "V") {
        return "Morona Santiago";
    } else if (primeraLetra === "N") {
        return "Napo";
    } else if (primeraLetra === "S") {
        return "Pastaza";
    } else if (primeraLetra === "P") {
        return "Pichincha";
    } else if (primeraLetra === "K") {
        return "Sucumbíos";
    } else if (primeraLetra === "Q") {
        return "Orellana";
    } else if (primeraLetra === "T") {
        return "Tungurahua";
    } else if (primeraLetra === "Z") {
        return "Zamora-Chinchipe";
    } else if (primeraLetra === "Y") {
        return "Santa Elena";
    }

    // Si no coincide con ninguna condición, retornar un mensaje indicando que la provincia no fue encontrada
    return "Provincia incorrecta";

}

obtenerTipoVehiculo=function(placa){
     // Obtener la segunda letra de la placa (código de tipo de vehículo)
     let segundaLetra = placa.charAt(1);

     // Asignar tipo de vehículo basado en la segunda letra
     if (segundaLetra == "A" || segundaLetra == "Z") {
         return "Vehículo Comercial";
     } else if (segundaLetra == "E") {
         return "Vehículo Gubernamental";
     } else if (segundaLetra == "X") {
         return "Vehículo de Uso Oficial";
     } else if (segundaLetra == "S") {
         return "Vehículo de Gobiernos Provinciales";
     } else if (segundaLetra == "M") {
         return "Vehículo Municipal";
     } else if (
         segundaLetra != "A" &&
         segundaLetra != "E" &&
         segundaLetra != "X" &&
         segundaLetra != "S" &&
         segundaLetra != "M"
     ) {
         return "Vehículo Particular";
     }
 
     // Si no coincide con ninguna condición, retornar un mensaje indicando que el tipo de vehículo no fue encontrado
     return "vehículo Incorrecto";

}

obtenerDiaPicoYPlaca=function(placa) {
    // Obtener el último dígito de la placa
    let ultimoDigito = placa.charAt(placa.length - 1);

    // Asignar día de Pico y Placa basado en el último dígito
    if (ultimoDigito == 1 || ultimoDigito == 2) {
        return "Lunes";
    } else if (ultimoDigito == 3 || ultimoDigito == 4) {
        return "Martes";
    } else if (ultimoDigito == 5 || ultimoDigito == 6) {
        return "Miércoles";
    } else if (ultimoDigito == 7 || ultimoDigito == 8) {
        return "Jueves";
    } else if (ultimoDigito == 9 || ultimoDigito == 0) {
        return "Viernes";
    } else {
        return "Libre circulación (Sábado, Domingo o Feriado)";
    }
}

