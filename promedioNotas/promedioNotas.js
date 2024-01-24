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
    if(promedio>7){
        cambiarImagen("imagenPromodio","./imagenes/ganador.gif");
    }else{
        cambiarImagen("imagenPromodio","./imagenes/perdedor.gif")
    }

}