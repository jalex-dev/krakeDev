obtenerAleatorio = function () {
    //obtiene un numero aleatorio entero, del uno al 3
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random();
    //el rango de numeros es entre 0 y 1, por lo que multip    
    numeroMultiplicado = (aleatorio * 3);
    numeroEntero = parseInt(numeroMultiplicado);
    valorDado = numeroEntero + 1;
    return valorDado;

}
generarElemento = function () {
    //genera randomicamente las cadenas "piedras", papel o tijera
    let elemento = obtenerAleatorio();
    if (elemento == 1) {
        return 'piedra';
    }
    else if (elemento == 2) {
        return 'papel';
    }
    else {
        return 'tijeras'
    }
}
determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    //determinar cual de los dos jugadores gana el piedra papel o tijera
    if ((eleccionJugador1 == 'piedra' && eleccionJugador2 == 'tijeras') ||
        (eleccionJugador1 == 'tijeras' && eleccionJugador2 == 'papel') ||
        (eleccionJugador1 == 'papel' && eleccionJugador2 == 'piedra')) {
        return 1;
    } else if (eleccionJugador1 === eleccionJugador2) {
        return 0;
    } else {
        return 2;
    }
}
//llamada a la función para generar ruta una elección de cada jugador
generarRuta=function(nombre){
    //genera la ruta de la imagen, en base al nombre que recibe. la ruta es: "./imagenes/<nombre>.png"
    //por ejemplo: si llega el nombre de tijeras retornaria ./imagenes/tijeras.png
     // Concatenar el nombre recibido con la ruta base de las imágenes
     let ruta = "./imagenes/" + nombre.toLowerCase() + ".png";
     return ruta;

}
