jugar=function(){
    let valorRecuperado;
    valorRecuperado=lanzarDado();
    let mensajeGanador;
    let mensajePerdedor;
    cambiarTexto("lblNumero",valorRecuperado)
    if(valorRecuperado>3){
        mensajeGanador="¡Felicidades, ES MAYOR A 3! Has ganado."
        cambiarTexto("lblMensaje", mensajeGanador)
    }else{
        mensajePerdedor="ES MENOR A 3, Lo siento, has perdido."
        cambiarTexto("lblMensaje",mensajePerdedor);
    }
}

// Crear una funcion llamada lanzarDado
// no recibe parametros
// retorna un numero aleatorio
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random();
    //el rango de numeros es entre 0 y 1, por lo que multip    
    numeroMultiplicado =( aleatorio * 6);
    numeroEntero =parseInt(numeroMultiplicado);
    valorDado = numeroEntero +1;
    return valorDado ;
}