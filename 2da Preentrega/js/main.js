
//objetos

class Paciente{
    constructor(rutPaciente, nombrePaciente, fechaAtencion, horaAtención){
        this.rutPaciente=rutPaciente;
        this.nombrePaciente=nombrePaciente;
        this.fechaAtencion=fechaAtencion;
        this.horaAtención=horaAtención;
    }
}

//Funciones

function crearCita(){
    //Solicitamos datos del Paciente
    const rutPaciente = prompt("Ingrese Rut del Paciente");
    const nombrePaciente=prompt("Ingrese Nombre del paciente");
    const fechaAtencion=prompt("Ingrese Fecha de Cita");
    const horaAtención=prompt("Ingrese Horario de Cita");

    //Validar que no sean datos en blanco
    if (!rutPaciente || !nombrePaciente || !fechaAtencion || !horaAtencion) {
        alert("Todos los campos son obligatorios. No se puede crear la cita.");
        return; 
    }

    //Creamos la cita al paciente
    const paciente= new Paciente(
        rutPaciente,
        nombrePaciente,
        fechaAtencion,
        horaAtención
    )

    //Agregamos Cita a nuestro array
    pacientes.push(paciente);
    
    //Mensaje de 
    alert("Cita Agregada con exito");
//    console.log(paciente);
}

function mostrarAgenda(){
    //Mostramos una lista de todos los pacientes agendados por consola
    console.log("Listado de pacientes:");
    pacientes.forEach(function(paciente) {
        console.log(`Rut: ${paciente.rutPaciente}`);
        console.log(`Nombre: ${paciente.nombrePaciente}`);
        console.log(`Fecha de Cita: ${paciente.fechaAtencion}`);
        console.log(`Hora de Cita: ${paciente.horaAtención}`);
        console.log('--------------------------------------------------');
    })
}

function modificarCita(){

    const rutBuscado= prompt("Ingrese el Rut del Paciente que quiere Modificar");


    const rutEncontrado=pacientes.find( (el)=>{
        return el.rutPaciente===rutBuscado;
    });

    if(!rutEncontrado){
        alert("No se encuentró un paciente con este Rut.")
        return;
    }

    const fechaNuevaAtencion=prompt("Ingrese Nueva Fecha de Cita");
    const horaNuevaAtención=prompt("Ingrese Nuevo Horario de Cita");

    rutEncontrado.fechaAtencion=fechaNuevaAtencion;
    rutEncontrado.horaAtención=horaNuevaAtención;

    alert("Hora Reagendada con Exito")
    mostrarAgenda();
}

function eliminarCita(){

        // Solicitar el RUT del paciente a eliminar
        const rutEliminar = prompt("Ingrese el RUT del paciente que desea eliminar:");

    
        const index = pacientes.findIndex(paciente => paciente.rutPaciente === rutEliminar);
    
        // Si el índice es diferente a -1, significa que se encontró el paciente
        if (index !== -1) {
            const paciente = pacientes[index];
            const mensajeConfirmacion= `¿Está seguro de que desea eliminar este paciente?
                                        \n\nDetalles del paciente a eliminar:
                                        \nRut: ${paciente.rutPaciente}
                                        \nNombre: ${paciente.nombrePaciente}
                                        \nFecha de Cita: ${paciente.fechaAtencion}
                                        \nHora de Cita: ${paciente.horaAtención}`;


            const confirmar= confirm(mensajeConfirmacion)

            if(confirmar){
                // Eliminar el paciente del arreglo utilizando splice
                pacientes.splice(index, 1);
        
                // Mensaje de confirmación
                alert("Paciente eliminado con éxito.");
            }
            else{

                alert("Accion cancelada");    
            }

        } else {
            // Si no se encontró el paciente con el RUT ingresado
            alert("No se encontró un paciente con ese RUT.");
            return;
        }
    
        // Mostrar el arreglo actualizado de pacientes
        console.log("Listado de pacientes Actualizado:");
        mostrarAgenda();

}

//Estoy validando que el usuario ingrese solo numeros entre el 0 y el 3

function opcionValida() {

    // Chequeamos si la opción es menor a 0 o mayor a 3
    while(opcion < 0 || opcion > 4) {
        alert("OPCIÓN INVÁLIDA");
        opcion = parseInt(prompt(opciones));
    }

    // Si ingresó 0 para SALIR, retornamos false
    if(opcion === 0) {
        alert("SALIR");
        return false;
    }

    return true;
}


//inicio del programa
const pacientes=[
    new Paciente("1-9", "Moises Perez", "21-11-2024","13:00"),
];


alert("Bienvenido a su Agenda de Pacientes")

const opciones = "1- Crear un cita, 2- Mostrar Agenda, 3- Modificar cita, 4-Elimina cita, 0- Salir";
let opcion = parseInt(prompt(opciones));

while(opcionValida()) {

    switch(opcion) {
        case 1:  //Creamos una nueva Cita
            crearCita(); 
            break;

        case 2: //Mostramos la Agenda
            mostrarAgenda();
            break;

        case 3: //Modificamos la Cita
            modificarCita();
            break;

        case 4: //Eliminamos una Cita
            eliminarCita();
            break;
            
    }

    // Volver a pedir la opción para no quedarse en un bucle infinito
    opcion = parseInt(prompt(opciones));
}