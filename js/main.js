//Variables
const miFormulario = document.getElementById('formulario');
const nombreCliente = document.getElementById('nombreCliente');
const mailCliente = document.getElementById('mailCliente');
const telCliente = document.getElementById('telCliente');
const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

const trabajosCheck = () => {
    const seleccionArr = [];
    for ( let i = 0; i< checkboxes.length; i++){
        seleccionArr.push(checkboxes[i].value)
    };
    const seleccion = seleccionArr.toString();
    return seleccion;
    
}


//Funciones



function validarFormulario(e){
    e.preventDefault();

    console.log("enviaste el formulario")
};

//Swal
function exito(){
    swal({
        title: "¡Buen Trabajo!",
        text: "Formulario enviado exitosamente.",
        icon: "success",
        button: "LISTO",
    });
};


//Eventos
miFormulario.addEventListener("submit", validarFormulario);



/*
console.log(nombreCliente.value)
console.log(mailCliente.value)
console.log(telCliente.value)
trabajosCheck()
console.log(checkboxes[0].value)
console.log(trabajosCheck())
*/


