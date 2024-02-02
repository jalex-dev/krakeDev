let clientes = [{ cedula: "34232234", nombre: "Pres", edad: 34 }, { cedula: "423424", nombre: "traeew", edad: 33 }, { cedula: "43234423", nombre: "rEwqq", edad: 24 }];

mostrarCliente = function () {
    let cmpTabla = document.getElementById("tablaCliente");
    let contenidoTabla = "<table><tr>" +
        "<th>Cedula</th>" +
        "<th>Nombre</th>" +
        "<th>Edad</th>" +
        "</tr>";
    let client;
    for (let index = 0; index < clientes.length; index++) {
        client = clientes[index];
        contenidoTabla += "<tr>" +
            "<td>" + client.cedula + "</td>" +
            "<td>" + client.nombre + "</td>" +
            "<td>" + client.edad + "</td>" +
            "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

buscarCliente = function (cedula) {
    let clienteEncontrado = null;
    let elementoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }

    }

    return clienteEncontrado;
}

agregarCliente = function (client) {
    let returnClient;
    returnClient = buscarCliente(client.cedula)
    if (returnClient == null) {
        clientes.push(client);
    } else {
        alert("La Cedula ya Existe");
    }
    mostrarCliente();
}

crearCliente = function () {
    let nombreCliente = recuperarTexto("txtNombre");
    let edadCliente = recuperarInt("txtEdad");
    let cedulaCliente = recuperarTexto("txtCedula");
    let nuevoCliente = {};
    nuevoCliente.nombre = nombreCliente;
    nuevoCliente.edad = edadCliente;
    nuevoCliente.cedula = cedulaCliente;
    //Validacion de campos vacios
    agregarCliente(nuevoCliente)

}

ejecutarBusquedad = function () {
    let busqueda = recuperarTexto("txtBuscar")
    let clienteEncontrado = buscarCliente(busqueda);
    if (clienteEncontrado == null) {
        alert("cliente no encontrado")
    } else {
        mostrarCampos(clienteEncontrado);
    }
}

mostrarCampos = function (cliente) {
    mostrarTextoEnCaja("txtNombre", cliente.nombre);
    mostrarTextoEnCaja("txtEdad", cliente.edad);
    mostrarTextoEnCaja("txtCedula", cliente.cedula);
}

limpiarCampos = function () {
    let cmpTabla = document.getElementById("tablaCliente");

    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtEdad", "");
    mostrarTextoEnCaja("txtCedula", "");
    cmpTabla.innerHTML = "";

}

modificarCliente = function (cliente) {
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if (!clienteEncontrado == null) {

        trarTextoEnCaja("txtNombre", "");
        mostrarTextoEnCaja("txtEdad", "");
        mostrarTextoEnCaja("txtCedula", "");
    }
    clienteEncontrado.nombre = cliente.nombre;
    clienteEncontrado.edad = cliente.edad;

mostrarCliente();
}

guadarCambios = function () {
    let nombreCliente = recuperarTexto("txtNombre");
    let edadCliente = recuperarInt("txtEdad");
    let cedulaCliente = recuperarTexto("txtCedula");
    let datosCliente = {};
    datosCliente.nombre = nombreCliente;
    datosCliente.edad = edadCliente;
    datosCliente.cedula = cedulaCliente;

    modificarCliente(datosCliente);

}


