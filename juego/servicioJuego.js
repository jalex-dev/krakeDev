obtenerAleatorio=function(){
    //obtiene un numero aleatorio entero, del uno al 3
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random();
    //el rango de numeros es entre 0 y 1, por lo que multip    
    numeroMultiplicado =( aleatorio * 3);
    numeroEntero =parseInt(numeroMultiplicado);
    valorDado = numeroEntero +1;
    return valorDado ;

}