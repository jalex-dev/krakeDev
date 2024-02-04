let esNuevo = false;

let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "0758785347", nombre: "Tonny", apellido: "Start", sueldo: 862.0 }
]

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen")
    mostrarEmpleados();

    desavilitarCajaEmpleado();


}
desavilitarCajaEmpleado=function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");

}
mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen")
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol")
}

mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table class='miTabla'><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
    let empleado;
    for (let index = 0; index < empleados.length; index++) {
        empleado = empleados[index];
        contenidoTabla += "<tr>" +
            "<td>" + empleado.cedula + "</td>" +
            "<td>" + empleado.nombre + "</td>" +
            "<td>" + empleado.apellido + "</td>" +
            "<td>" + empleado.sueldo + "</td>" +
            "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}
buscarEmpleado = function (cedula) {
    let empleadoEncontrado = null;
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }

    }

    return empleadoEncontrado;
}

agregarEmpleado = function (empleado) {
    let returnEmpleado;
    returnEmpleado = buscarEmpleado(empleado.cedula)
    if (returnEmpleado == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}

guardar = function () {
    let returnEmpleado;
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");

    //Validaciones de los campos
    if (validarCedula(cedula) & valiadarNombreApellidos(nombre, "lblErrorNombre") & valiadarNombreApellidos(apellido, "lblErrorApellido") & validarSueldo(sueldo)) {
        if (esNuevo == true) {
            returnEmpleado = agregarEmpleado(crearNuevo(cedula, nombre, apellido, sueldo))
            if (returnEmpleado == true) {
                alert("EMPLEADO GUARDO CORRECTAMENTE");
                mostrarEmpleados();
            }else{
                alert("YA EXITE UN EMPLEADO CON LA CEDULA: " + cedula)
            }
        } else {
        }
    };
}

esMayuscula = function (caracter) {
    let code = caracter.charCodeAt();

    // Rango de códigos ASCII correspondiente a las letras mayúsculas A-Z
    if (code >= 65 && code <= 90) {
        return true;
    } else {
        return false;
    }
}
esDigito = function (caracter) {
    let code = caracter.charCodeAt();

    // Rango de códigos ASCII correspondiente a los dígitos 0-9
    if (code >= 48 && code <= 57) {
        return true;
    } else {
        return false;
    }
}

validarCedula = function (cedula) {
    esValidaCedula = true;
    if (cedula == "") {
        mostrarTexto("lblErrorCedula", "*CAMPO OBLIGATORIO");
        return false;

    }

    if (cedula.length != 10) {
        mostrarTexto("lblErrorCedula", "La cedula debe tener 10 dígitos");
        return false;
    } else {
        for (let i = 0; i < 10; i++) {
            if (!esDigito(cedula[i])) {
                mostrarTexto("lblErrorCedula", "La cedula puede contener solo números.");
                return false;
            }

        }
    }
    mostrarTexto("lblErrorCedula", "");

    return true;
}

valiadarNombreApellidos = function (campo, componente) {

    if (campo == "") {
        mostrarTexto(componente, "*CAMPO OBLIGATORIO");
        return false;

    }

    if (campo.length >= 3) {

        for (let i = 0; i < campo.length; i++) {
            let element = campo[i];

            if (!esMayuscula(element)) {
                mostrarTexto(componente, "Solo pueden contener letras mayusculas.");

                return false;

            }
        }
    } else {
        mostrarTexto(componente, "Deben tener al menos 3 caracteres.");
        return false;
    }
    mostrarTexto(componente, "");

    return true;
}

validarSueldo = function (sueldo) {
    if (isNaN(sueldo)) {
        mostrarTexto("lblErrorSueldo", "*CAMPO OBLIGATORIO: Ingrese un valor numérico valido.");
        return false;

    }
    //Se comprueba que el sueldo sea entre 400 y 5000
    if (sueldo < 400 || sueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "El salario debe ser mayor a 400 euros y menor o igual a 5000.");
        return false;
    } else {
        mostrarTexto("lblErrorSueldo", "");
        return true;
    }
}

crearNuevo = function (cedula, nombre, apellido, sueldo) {
    let nuevoEmpleado = {};
    nuevoEmpleado.cedula = cedula;
    nuevoEmpleado.nombre = nombre;
    nuevoEmpleado.apellido = apellido;
    nuevoEmpleado.sueldo = sueldo;
    return nuevoEmpleado;

}