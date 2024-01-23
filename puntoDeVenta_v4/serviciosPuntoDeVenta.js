calcularValorDescuento=function(monto,pocentajeDescuento){
    //     calcula el valor del porcentaje
    // recuerde que para calcular el valor del descuento, puede multiplicar el monto por el 
    // porcentaje  y dividir para 100
    let valorDescuento = (monto * pocentajeDescuento) /100
    return valorDescuento;
}
calcularIVA=function(monto){
    // IVA es un 12% de los precios. Si queremos sab
    // si un producto cuesta X entonces su IVA es X*0.12
    let iva=monto*0.12;
    return iva;
}
calcularSubtotal=function(precio,cantidad){
    // este metodo recibe dos parametros: el precio del producto y la cant
    // devuelve el subtotal, que es el precio multiplicado por la cant
    let subtotal=precio*cantidad;
    return subtotal;
}
// Declarar la función calcularTotal
calcularTotal=function (subtotal, descuento, iva) {
    /* Este método recibe tres parámetros: el subtotal, el descuento y
    el IVA. Devuelve el total a pagar, que es el subtotal menos
    el descuento más el IVA. */
    let total = (subtotal - descuento) + iva;
    return total;
}


probarFunciones=function(){
    console.log("prueba de la función");
    console.log(calcularIVA(200))
}

