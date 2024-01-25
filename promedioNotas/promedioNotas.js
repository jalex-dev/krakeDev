calcularPromedioNotas=function(){
    let nota1;
    let nota2;
    let nota3;
    let promedio;

    nota1 = recuperarFlotante("txtNota1");
    nota2 = recuperarFlotante("txtNota2");
    nota3 = recuperarEntero("txtNota3");
    promedio =calcularPromedio(nota1,nota2,nota3);

    cambiarTexto("lblPromedio",promedio)
   if(promedio > 0 &&promedio<5){
        cambiarImagen("imagenPromodio","./imagenes/perdedor.gif")
        cambiarTexto("lblMensaje","REPROBADO")
    } else if(promedio>=5&&promedio<=8){
        cambiarImagen("imagenPromodio","./imagenes/buentrabajo.gif")
        cambiarTexto("lblMensaje","BUEN TRABAJO")
    }else if(promedio>8 && promedio<=10){
        cambiarImagen("imagenPromodio","./imagenes/ganador.gif");
        cambiarTexto("lblMensaje","EXCELENTE")

    }else{
        cambiarImagen("imagenPromodio","./imagenes/error404.gif");
        cambiarTexto("lblMensaje","DATOS INCORRECTOS")
        //cambiarTexto("lblPromedio",promedio)
    }

}