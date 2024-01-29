let frutas = ["pera","manzana","naranja"];

buscar = function (fruta) {
    let element;
    let frutaEncontrada = null;
    for (let index = 0; index < frutas.length; index++) {
        element = frutas[index];
        if (fruta == element) {
            frutaEncontrada = element;
            break;
        }
    }
    return frutaEncontrada;
}
probarBusqudad=function(){
    let fruta = recuperarTexto("lblFruta");
    let frutaEncontrada = buscar(fruta);
    if (frutaEncontrada==null) {
        alert("NO EXISTE FRUTA");
        
    }else{
        alert(`SI EXISTE LA FRUTA ${frutaEncontrada}`);
    }

}