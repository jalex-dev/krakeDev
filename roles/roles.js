let esNuevo = false;

let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "0758785347", nombre: "Tonny", apellido: "Start", sueldo: 862.0 }
]


//cedula,nombre,sueldo,valorPagar,aporteEmpleado,aporteEmpleador
let roles=[];

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen")
    mostrarEmpleados();

    desavilitarCajaEmpleado();


}
desavilitarCajaEmpleado = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");

}
mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardarRol");
    mostrarRoles();
    mostrarTotales();
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarRoles();
    mostrarTotales();
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

    // Validaciones de los campos
    if (validarCedula(cedula) & valiadarNombreApellidos(nombre, "lblErrorNombre") & valiadarNombreApellidos(apellido, "lblErrorApellido") & validarSueldo(sueldo)) {
        if (esNuevo) {
            returnEmpleado = agregarEmpleado(crearNuevo(cedula, nombre, apellido, sueldo));
            if (returnEmpleado) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                desavilitarCajaEmpleado();
                esNuevo = false;
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CÉDULA: " + cedula);
            }
        } else {
            let empleadoEncontrado = buscarEmpleado(cedula);
            if (empleadoEncontrado) {
                empleadoEncontrado.nombre = nombre;
                empleadoEncontrado.apellido = apellido;
                empleadoEncontrado.sueldo = sueldo;
                alert("DATOS ACTUALIZADOS DEL EMPLEADO");
                deshabilitarComponente("txtCedula");
                deshabilitarComponente("txtNombre");
                deshabilitarComponente("txtApellido");
                deshabilitarComponente("txtSueldo");
                deshabilitarComponente("btnGuardar");
                mostrarEmpleados();
            } else {
                alert("NO SE ENCONTRÓ UN EMPLEADO CON LA CÉDULA: " + cedula);
            }
        }
    }
};


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

ejecutarBusquedad = function () {
    let cedula = recuperarTexto("txtBusquedaCedula");
    let resultadoBusquedad = buscarEmpleado(cedula);
    if (resultadoBusquedad == null) {
        alert("EMPLEADO NO EXISTE")
    } else {
        mostrarCampos(resultadoBusquedad);
    }
}

mostrarCampos = function (empleado) {

    mostrarTextoEnCaja("txtCedula", empleado.cedula);
    mostrarTextoEnCaja("txtNombre", empleado.nombre);
    mostrarTextoEnCaja("txtApellido", empleado.apellido);
    mostrarTextoEnCaja("txtSueldo", empleado.sueldo);

    deshabilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");

};

limpiarCamposEmpleado=function(){
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");

    desavilitarCajaEmpleado();
    esNuevo=false;

}

//reto 49

buscarPorRol=function(){
    let cedula = recuperarTexto("txtBusquedaCedulaRol");
    let resultadoBusquedad = buscarEmpleado(cedula);
    if (resultadoBusquedad == null) {
        alert("EMPLEADO NO EXISTE")
    } else {
        mostrarCamposRol(resultadoBusquedad);
    }
}

mostrarCamposRol=function(empleado){
    mostrarTexto("infoCedula",empleado.cedula);
    mostrarTexto("infoNombre",empleado.nombre + " " + empleado.apellido);
    mostrarTexto("infoSueldo",empleado.sueldo);

}

// Calcula el 9.45% del sueldo del empleado y retorna el valor.
// Por ejemplo, si el empleado gana 100, retorna 9.45.
calcularAporteEmpleado = function(sueldo) {
    let aporte;
    aporte = sueldo * 0.0945;
    return aporte;
};

calcularValorAPagar=function(sueldo,aporteIess,descuento){
    // calcula el valor a pagar al empleado, restando del sueldo el valor de
    //aporte del empleado y el descueto, retorna el valor
    let totalAPagar;
    totalAPagar=(sueldo-aporteIess-descuento);
    return totalAPagar;
}

calcularRol=function(){
    let sueldo =recuperarFloatDiv("infoSueldo");
    let descuentos =recuperarFloat("txtDescuentos");

    // Validar que descuentos sea un número flotante, y esté en el rango de 0 a sueldo del empleado
    if (isNaN(descuentos) || descuentos < 0 || descuentos > sueldo) {
        mostrarTexto("lblErrorDescuentos","Ingrese un valor de descuento válido.");
        return;
    }
    mostrarTexto("lblErrorDescuentos","");

    // Invocar a la función calcularAporteEmpleado y mostrar el resultado
    let aporteEmpleado = calcularAporteEmpleado(sueldo);
    mostrarTexto("infoIESS" , parseFloat(aporteEmpleado).toFixed(2));

    // Invocar a la función calcularValorAPagar y mostrar el resultado
    let valorAPagar = calcularValorAPagar(sueldo,aporteEmpleado, descuentos);
    mostrarTexto("infoPago",parseFloat(valorAPagar).toFixed(2));
    habilitarComponente("btnGuardarRol");

}

buscarRol=function(cedula){
    let rolEncontrado = null;
    let elementoRol;
    for (let i = 0; i < roles.length; i++) {
        elementoRol = roles[i];
        if (elementoRol.cedula == cedula) {
            rolEncontrado = elementoRol;
            break;
        }

    }

    return rolEncontrado;
}

agregarRol=function(rol){
    let returnRol = buscarRol(rol.cedula)
    if (returnRol == null) {
        roles.push(rol);
    }else{
        alert("YA EXISTE ROL")
    }
}

calcularAporteEmpleador=function(sueldo){
   let porcentajeIess = 0.1115; //11.15%  del sueldo 11.15/100
   let aportesEmpl = sueldo * porcentajeIess;
   return aportesEmpl.toFixed(2);

}
guardarRol=function(){
    let cedula =recuperarTextoDiv("infoCedula");
    let nombre = recuperarTextoDiv("infoNombre")
    let sueldo = recuperarFloatDiv("infoSueldo");
    let aporteEmpleador = calcularAporteEmpleador(sueldo);

    //cedula,nombre,sueldo,valorPagar,aporteEmpleado,aporteEmpleador
    let rol={}

    rol.cedula = cedula;
    rol.nombre = nombre;
    rol.sueldo = sueldo;
    rol.aporteEmpleado = recuperarTextoDiv("infoIESS");
    rol.valorPagar = recuperarTextoDiv("infoPago");
    rol.aporteEmpleador=aporteEmpleador

    agregarRol(rol);
    deshabilitarComponente("btnGuardarRol");

}




mostrarRoles=function(){

    let cmpTabla = document.getElementById("tablaResumen");
    let contenidoTabla = "<table class='miTabla'><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>VALOR A PAGAR</th>" +
        "<th>APORTE EMPLEADO</th>" +
        "<th>APORTE EMPLEADOR</th>" +
        "</tr>";
    let rol;
    for (let index = 0; index < roles.length; index++) {
        rol = roles[index];
        contenidoTabla += "<tr>" +
            "<td>" + rol.cedula + "</td>" +
            "<td>" + rol.nombre + "</td>" +
            "<td>" + rol.valorPagar+ "</td>" +
            "<td>" + rol.aporteEmpleado + "</td>" +
            "<td>" + rol.aporteEmpleador + "</td>" +
            "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;

}


mostrarTotales = function() {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;
    let totalNomina = 0;

    for (let i = 0; i < roles.length; i++) {
        let rol = roles[i];
        totalAPagar += parseFloat(rol.valorPagar);
        totalEmpleado += parseFloat(rol.aporteEmpleado);
        totalEmpleador += parseFloat(rol.aporteEmpleador);
    }

    // Redondear los totales a dos decimales
    totalAPagar = parseFloat(totalAPagar.toFixed(2));
    totalEmpleado = parseFloat(totalEmpleado.toFixed(2));
    totalEmpleador = parseFloat(totalEmpleador.toFixed(2));

    mostrarTexto("infoTotalPago", totalAPagar);
    mostrarTexto("infoAporteEmpresa", totalEmpleador);
    mostrarTexto("infoAporteEmpleado", totalEmpleado);

    totalNomina = totalAPagar + totalEmpleado + totalEmpleador;

    // Redondear el total de la nómina a dos decimales
    totalNomina = parseFloat(totalNomina.toFixed(2));

    mostrarTexto("infoNomina", totalNomina);
};

