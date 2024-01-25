let puntos=0;
let lanzamientos=5;
jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos(); 
   
}

modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos)
    //si el jugador obtiene masv de 20 puntos
    // mostrar un mensaje GANASTES!!!
    if (puntos>20){
        cambiarTexto("lblGanar",'Ganaste!');
        limpiar();
    }
}
//no recibe parametros 
//resta 1 al la variable lanzamientos, guarda el resultado en la misma variable 
//y muestra en pantalla
modificarLanzamientos=function(){
    //si lanzamientos llega a 0
    //mostrar en pantalla Game over
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblLanzamietos",lanzamientos)
    if (lanzamientos==0){
        cambiarTexto("lblGanar","Game Over")   ;
        limpiar();
    }
}
limpiar=function(){
    //limpia los campos del juego
    puntos = 0 ;
    lanzamientos = 5;
    cambiarTexto("lblPuntos",puntos);
    cambiarTexto("lblLanzamietos",lanzamientos);
    cambiarImagen("imgDado", " ");

}
//funcion mostrarCara, recibe el numero que quiere mostrar
//muestra la imagen correspondiente al numero que recibe
// no retor nada
mostrarCara=function(numero){
    if(numero ==1){// con == se compara, mientras que con = se asigna
        cambiarImagen("imgDado","dados1.png")
    }else if(numero==2){
        cambiarImagen("imgDado", "dados2.png");
    }else if(numero==3){
        cambiarImagen("imgDado", "dados3.png");
    }else if(numero==4){
        cambiarImagen("imgDado", "dados4.png");
    }else if(numero==5){
        cambiarImagen("imgDado", "dados5.png");
    }else if(numero==6){
        cambiarImagen("imgDado", "dados6.png");
    }


}
    lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}