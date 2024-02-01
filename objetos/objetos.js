probarAtributos = function () {
    let persona = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 23,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);

    if (persona.estaVivo == true) {
        console.log("Esta vivo");
    } else {
        console.log("No esta vivo")
    }
}

crearProducto = function () {
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
modificarAtributos = function () {
    cuenta = {
        numero: "438765-564387-564387",
        saldo: 34

    }

    cuenta.saldo = 100;
    cuenta.saldo += 10

    console.log(cuenta.saldo)

}
crearCliente = function () {
    let cliente = {
        nombre: "Juan",
        cedula: "23423122"
    }
    cliente1 = {};
    cliente1.nombre = "Juanito";
    cliente1.apellido = "Ramon"
}
probarIncrementar = function () {
    let cta = {
        saldo: 234,
        numero: "42313234"
    }
    incrementarSaldo(cta, 54)
    console.log(cta.saldo)
}
incrementarSaldo = function (cuenta, monto) {
    cuenta.saldo += monto
}
determinarMayor = function (persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona1.edad < persona2.edad) {
        return persona2;
    }
    else {
        return null;
    }
}

probarDetermianrMayor=function(){
    let juan ={
        nombre:"juan",
        apellido:"perez",
        edad: 43
        
    }
    let maria ={
        nombre:"maria",
        apellido:"martinez",
        edad: 28
    }
    
   let mayor = determinarMayor(juan,maria);
   if(mayor!=null){
    console.log(`El mayor es ${mayor.nombre}`);

   }
}