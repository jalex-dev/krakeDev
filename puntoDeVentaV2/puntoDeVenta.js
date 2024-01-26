calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento = 0;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");

    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");
    if (esCampoValida(nombreProducto, cantidad,precioProducto)) {
        //4. Recuperar el porcentaje de descuento como int
        //porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");
        //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        //5. Mostrar valorSubtotal en el componente lblSubtotal
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10
                Subtotal esperado: 54
            Si el caso de prueba es exitoso, hacer un commit
         */
        mostrarTexto("lblSubtotal", valorSubtotal);

        //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        //7. Mostrar el resultado en el componente lblDescuento
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
                Descuento esperado: 5.4
            Si el caso de prueba es exitoso, hacer un commit
         */
        mostrarTexto("lblDescuento", valorDescuento.toFixed(2));
        //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
        //   El IVA debe calcularse sobre el valor del subtotal menos el descuento
        valorIVA = calcularIVA(valorSubtotal - valorDescuento);
        //9. Mostrar el resultado en el componente lblValorIVA    
        /*
                Caso de prueba: 
                    precioProducto: 5.4  cantidad: 10 descuento: 10
                        --valorSubtotal: 54
                        --descuento:5.4
                        --valorSubtotal - descuento: 48.6
                    IVA esperado: 5.832
                Si el caso de prueba es exitoso, hacer un commit
            */
        mostrarTexto("lblValorIVA", valorIVA.toFixed(2));
        //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        //11. Mostrar el resultado en el componente lblTotal
        /*
               Caso de prueba: 
                   precioProducto: 5.4  cantidad: 10 descuento: 10
                       --valorSubtotal: 5.4
                       --descuento: 5.4
                       --IVA: 5.832
                   Total esperado: 54.432
               Si el caso de prueba es exitoso, hacer un commit
           */
        mostrarTexto("lblTotal", valorTotal.toFixed(2))
        //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
        /*
            Ejemplo: 
                Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
            Si funciona, hacer un commit
        */

        let mensajeResumen = `Valor a pagar por ${cantidad} ${nombreProducto} con ${valorDescuento} de descuento: USD ${valorTotal.toFixed(2)}`;
        mostrarTexto("lblResumen", mensajeResumen)
    } else {
        mostrarTexto("lblSubtotal", "0.0");

        mostrarTexto("lblValorIVA", "0.0");
        mostrarTexto("lblTotal", "0.0");
        mostrarTexto("lblResumen", " ");
    }


}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */

    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "0");
    mostrarTextoEnCaja("txtPrecio", "0.0");
    mostrarTextoEnCaja("txtPorcentajeDescuento", "0");
    mostrarTexto("lblSubtotal", "0.0");

    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", " ");
}
/* SI TODO FUNCIONA, HACER UN PUSH */

esProductoValido = function (producto, idComponenteError) {
    if (producto == "") {
        mostrarTexto(idComponenteError, "*CAMPO OBLIGATORIO");
        return false;
    }

    if (producto.length > 10) {
        mostrarTexto(idComponenteError, "NO DEBE TENER MÁS DE 10 CARACTERES");
        return false;
    }

    // Si llegamos a este punto, significa que el producto es válido
    mostrarTexto(idComponenteError, "");
    return true;
}

esCantidadValida = function (cantidad, idComponenteError) {
    if (isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "*CAMPO OBLIGATORIO");
        return false;
    }
    if (cantidad <0|| cantidad > 100) {
        mostrarTexto(idComponenteError, "DEBE SER MAXIMO HASTA 100");
        return false;
    }
    // Si llegamos a este punto, significa que el producto es válido
    mostrarTexto(idComponenteError, "");

    return true

}
esPrecioValido = function (precio,idComponenteError) {
    if (isNaN(precio)) {
        mostrarTexto(idComponenteError, "*CAMPO OBLIGATORIO");
        return false;
    }
    if (precio <0 ||precio >50) {
        mostrarTexto(idComponenteError, "DEBE SER MAXIMO HASTA 50");
        return false;
    }
    // Si llegamos a este punto, significa que el producto es válido
    mostrarTexto(idComponenteError, "");

    return true
}


esCampoValida = function (producto, cantidad, precio) {
    let esProducto = esProductoValido(producto, "lblError1");
    let esCantidad = esCantidadValida(cantidad, "lblError2");
    let esPrecio = esPrecioValido(precio, "lblError3");

    // Devuelve true solo si todos los campos son válidos
    return esProducto && esCantidad && esPrecio;



}