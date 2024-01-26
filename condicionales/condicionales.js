/**
 * Calcula la tasa de interés basada en el ingreso anual del cliente.
 * 
 * La función asigna una tasa de interés según diferentes rangos de ingreso anual:
 * - Ingreso anual < $300,000: Tasa de interés del 16%
 * - $300,000 <= Ingreso anual < $500,000: Tasa de interés del 15%
 * - $500,000 <= Ingreso anual < $1,000,000: Tasa de interés del 14%
 * - $1,000,000 <= Ingreso anual < $2,000,000: Tasa de interés del 13%
 * - Ingreso anual >= $2,000,000: Tasa de interés del 12%
 * 
 * @param {float} ingresoAnual - El ingreso anual del cliente.
 * @returns {number} - La tasa de interés asignada según el ingreso anual.
 */
calcularTasaInteres=function(ingresoAnual){
    let tasaInteres;
    if(ingresoAnual<300000){
        tasaInteres = 16;
    }else if(ingresoAnual>= 300000 && ingresoAnual<5000000){
        tasaInteres = 15;
    }else if (ingresoAnual>=500000 && ingresoAnual<1000000) {
        tasaInteres = 14;        
    }else if (ingresoAnual>=1000000 && ingresoAnual<2000000) {
        tasaInteres = 13;
    }else if (ingresoAnual>=2000000) {
        tasaInteres = 12;        
    }
    return tasaInteres;

}
/**
 * Calcula el valor de la cuota mensual que un cliente puede pagar cuando se le asigna un préstamo.
 * 
 * El banco realiza los cálculos considerando las siguientes reglas:
 * - Si la edad del cliente es mayor a 50 años, su capacidad de pago es el 30% de la diferencia entre sus ingresos y egresos.
 * - Si la edad del cliente es de 50 años o menos, su capacidad de pago es el 40% de la diferencia entre sus ingresos y egresos.
 * 
 * @param {number} edad - La edad del cliente.
 * @param {number} ingresos - Los ingresos mensuales del cliente.
 * @param {number} egresos - Los egresos mensuales del cliente.
 * @returns {string} - El valor de la cuota mensual calculado y redondeado a dos decimales.
 */
calcularCapitalPago=function(edad,ingresos,egresos){
   
    let capacidadPago;
    let valorCoutaMensual

    // Calcular la capacidad de pago
    if (edad > 50) {
        capacidadPago = (ingresos - egresos) * 0.3;
    } else if (edad <= 50) {
        capacidadPago = (ingresos - egresos) * 0.4;
    }

    // Calcular la cuota mensual
    valorCoutaMensual= (capacidadPago / 12).toFixed(2);

    return valorCoutaMensual;

}
/**
 * Calcula el valor a pagar después de aplicar un descuento en función de la cantidad de productos comprados.
 * 
 * El descuento se aplica según la siguiente escala:
 * - Si la cantidad de productos comprados es menos de 3, no hay descuento.
 * - Si la cantidad de productos comprados es de 3 a 5 (inclusive), se aplica un descuento del 2%.
 * - Si la cantidad de productos comprados es de 6 a 11 (inclusive), se aplica un descuento del 3%.
 * - Si la cantidad de productos comprados es 12 o más, se aplica un descuento del 4%.
 * 
 * @param {number} precio - El precio unitario del producto.
 * @param {number} cantidad - La cantidad de productos comprados.
 * @returns {number} - El valor total a pagar después de aplicar el descuento.
 */
calcularDescuento=function(precio, cantidad) {
    let descuento = 0;

    // Calcular el descuento según la cantidad de productos comprados
    if (cantidad >= 3 && cantidad <= 5) {
        descuento = precio * 0.02;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = precio * 0.03;
    } else if (cantidad >= 12) {
        descuento = precio * 0.04;
    }

    // Calcular el valor total a pagar después del descuento
    let valorAPagar = (precio - descuento) * cantidad;

    return valorAPagar;
}

/**
 * Determina la categoría de colesterol LDL basada en el nivel de colesterol proporcionado.
 * 
 * Las categorías se definen de la siguiente manera:
 * - Nivel de colesterol LDL < 100: "OPTIMO"
 * - Nivel de colesterol LDL de 100 a 129: "CASI OPTIMO"
 * - Nivel de colesterol LDL de 130 a 159: "LIMITE SUPERIOR DEL RANGO NORMAL"
 * - Nivel de colesterol LDL de 160 a 189: "ELEVADO"
 * - Nivel de colesterol LDL >= 190: "MUY ELEVADO"
 * 
 * @param {number} nivelColesterol - El nivel de colesterol LDL a evaluar.
 * @returns {string} - La categoría de colesterol LDL según el rango en el que se encuentra.
 */
determinarColesterolLDL=function(nivelColesterol) {
    if (nivelColesterol < 100) {
        return "OPTIMO";
    } else if (nivelColesterol >= 100 && nivelColesterol < 130) {
        return "CASI OPTIMO";
    } else if (nivelColesterol >= 130 && nivelColesterol < 160) {
        return "LIMITE SUPERIOR DEL RANGO NORMAL";
    } else if (nivelColesterol >= 160 && nivelColesterol < 190) {
        return "ELEVADO";
    } else if (nivelColesterol >= 190) {
        return "MUY ELEVADO";
    }
}
/**
 * Valida la clave ingresada por el usuario.
 * 
 * La validez de la clave se determina mediante las siguientes reglas:
 * - La clave debe tener al menos 8 caracteres.
 * - La clave debe tener como máximo 16 caracteres.
 * 
 * @param {string} clave - La clave a validar.
 * @returns {boolean} - True si la clave es válida según las reglas, de lo contrario, False.
 */
validarClave=function(clave) {
    if (clave.length >= 8 && clave.length <= 16) {
        return true;
    } else {
        return false;
    }
}
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
 * Determina si la letra proporcionada como parámetro es una letra minúscula.
 * 
 * La función obtiene el código ASCII de la letra, verifica si el código está dentro del rango
 * correspondiente a las letras minúsculas (a-z). Se consideran las minúsculas sin tildes.
 * 
 * @param {string} caracter - La letra a evaluar.
 * @returns {boolean} - True si el caracter es una letra minúscula, de lo contrario, False.
 */
esMinuscula=function(caracter) {
    let code = caracter.charCodeAt();

    // Rango de códigos ASCII correspondiente a las letras minúsculas a-z
    if (code >= 97 && code <= 122) {
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
 * Determina si se otorga permiso basado en las notas obtenidas en Matemáticas, Física y Geometría.
 * 
 * Se otorga permiso si el estudiante obtiene más de 90 en cualquiera de las tres materias.
 * 
 * @param {number} notaMatematicas - La nota obtenida en Matemáticas.
 * @param {number} notaFisica - La nota obtenida en Física.
 * @param {number} notaGeometrica - La nota obtenida en Geometría.
 * @returns {boolean} - True si se otorga permiso, False en caso contrario.
 */
darPermiso=function(notaMatematicas, notaFisica, notaGeometrica) {
    // Se otorga permiso si la nota es mayor que 90 en cualquiera de las tres materias
    if (notaMatematicas > 90 || notaFisica > 90 || notaGeometrica > 90) {
        return true;
    } else {
        return false;
    }
}

/**
 * Se otorga permiso si el estudiante obtiene más de 90 en Matemáticas o Física y más de 80 en Geometría.
 * 
 * @param {number} notaMatematicas - La nota obtenida en Matemáticas.
 * @param {number} notaFisica - La nota obtenida en Física.
 * @param {number} notaGeometrica - La nota obtenida en Geometría.
 * @returns {boolean} - True si se otorga permiso, False en caso contrario.
 */
otorgarPermiso=function(notaMatematicas, notaFisica, notaGeometrica) {
    // Se otorga permiso si la nota es mayor que 90 en Matemáticas o Física y más de 80 en Geometría
    if ((notaMatematicas > 90 || notaFisica > 90) && notaGeometrica > 80) {
        return true;
    } else {
        return false;
    }
}

/**
 * Se otorga permiso si la nota es mayor que 90 en Matemáticas, Física o Geometría,
 * y además si la nota de Física es mayor a la de Matemáticas.
 * 
 * @param {number} notaMatematicas - La nota obtenida en Matemáticas.
 * @param {number} notaFisica - La nota obtenida en Física.
 * @param {number} notaGeometrica - La nota obtenida en Geometría.
 * @returns {boolean} - True si se otorga permiso, False en caso contrario.
 */
dejarSalir=function(notaMatematicas, notaFisica, notaGeometrica) {
    // Se otorga permiso si la nota es mayor que 90 en Matemáticas, Física o Geometría,
    // y además si la nota de Física es mayor a la de Matemáticas
    if ((notaMatematicas > 90 || notaFisica > 90 || notaGeometrica > 90) && notaFisica > notaMatematicas) {
        return true;
    } else {
        return false;
    }
}