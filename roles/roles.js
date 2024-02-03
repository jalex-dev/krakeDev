let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0758785347",nombre:"Tonny",apellido:"Start",sueldo:862.0}
]

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen")
    mostrarEmpleados();
}
mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen")
}

mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol")
}

mostrarEmpleados=function(){
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

