probarAtributos=function(){
    let persona ={
        nombre : "Juan",
        apellido: "Perez",
        edad : 23,
        estaVivo : true   
    }
    console.log(persona.nombre);
    console.log(persona.edad);

    if(persona.estaVivo==true){
        console.log("Esta vivo");
    }else{
        console.log("No esta vivo")
    }
}

crearProducto=function() {
    // Crear el primer producto
    let producto1 = {
        nombre: "PARLANTES",
        precio: 25.99,
        stock: 10
    };

    // Crear el segundo producto
    let producto2 = {
        nombre: "PERFUME",
        precio: 19.99,
        stock: 15
    };

    // Imprimir en consola el nombre del producto1
    console.log("Nombre del producto1: " + producto1.nombre);

    // Imprimir en consola el precio del producto2
    console.log("Precio del producto2: " + producto2.precio);

    // Comparar el stock de ambos productos
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock.");
    } else if (producto1.stock < producto2.stock) {
        console.log("Producto 2 tiene mayor stock.");
    } else {
        console.log("Ambos productos tienen el mismo stock.");
    }
}