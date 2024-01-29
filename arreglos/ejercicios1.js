let notas=[];

agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length)
}

agregarNota=function(nota){
    notas.push(nota)
    mostrarNota();

}
probarAgregar=function(){
    let notaRecuperada;
    notaRecuperada= recuperarInt("txtNota")
    agregarNota(notaRecuperada);
}

recorrerArreglo=function(){
    let notaR
    for (let index = 0; index < notas.length; index++) {
        notaR = notas[index];
        
        console.log(notaR)
    }
}

// Función para calcular el promedio
calcularPromedio=function() {
    let sumaNotas = 0;
    let promedio = 0;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }
    
    promedio = sumaNotas / notas.length;
    return promedio;
}

// Función para ejecutar el cálculo del promedio y mostrarlo en un componente h3
ejecutarPromedio=function() {
    let promedio = calcularPromedio();
    mostrarTexto("resultadoPromedio","Promedio: "+promedio);
}

generarTabla=function(){
    let contenidoTable = "";
    let cmpTabla = document.getElementById("divTable")
    contenidoTable+= "<table>"; 
    contenidoTable+="<tr><td>UNO</td></tr><tr><td>DOS </td></tr></tabla>"; 
    cmpTabla.innerHTML=contenidoTable;
}

mostrarNota=function(){
    let cmpTabla = document.getElementById("divTable")
    let contenidoTable = "<table> <tr><th>NOTAS</th></tr>";
    for (let index = 0; index < notas.length; index++) {
        let element = notas[index];
        contenidoTable +="<tr><td>"+element+"</td></tr>";
    }       
    contenidoTable += "</table>";
    cmpTabla.innerHTML=contenidoTable;

    
}