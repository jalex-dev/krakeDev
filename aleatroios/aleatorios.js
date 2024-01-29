generarNumeroAleatorio = function () {
    return Math.floor(Math.random() * 100) + 1;
}


generarAleatorios = function () {
    let cantidadNumeros = recuperarInt('txtCantidadNumeros');
    let aleatorios = [];
    if (cantidadNumeros >= 5 && cantidadNumeros <= 20) {


        for (let i = 0; i < cantidadNumeros; i++) {
            let numeroAleatorio = generarNumeroAleatorio();
            aleatorios.push(numeroAleatorio);
            console.log(i);
        }

        mostrarResultados(aleatorios);
    } else {
        alert("Ingrese una cantidad válida entre 5 y 20.");
    }
}

mostrarResultados = function (arregloNumeros) {
    let contenidoTable="<table><tr><th>Número</th></tr>";
    let resultadosDiv = document.getElementById('resultados');
    for (let index = 0; index < arregloNumeros.length; index++) {
        
        let numero = arregloNumeros[index];
        contenidoTable +="<tr><td>"+numero+"</td></tr>";
    }       
    contenidoTable += "</table>";
    resultadosDiv.innerHTML = contenidoTable;   
}

