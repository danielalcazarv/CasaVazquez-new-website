/*
//Variables
const miFormulario = document.getElementById('formulario');
const nombreCliente = document.getElementById('nombreCliente');
const mailCliente = document.getElementById('mailCliente');
const telCliente = document.getElementById('telCliente');
const trabajoCliente = document.getElementById('trabajoCliente')
const textoCliente = document.getElementById('textoCliente');

//Funciones
function validarDatos (){
    if (nombreCliente.value==""||
        mailCliente.value==""||
        telCliente.value==""||
        trabajoCliente.value==""||
        textoCliente.value==""){
            error();
    }else{
        exito();
    }
};

function validarFormulario(e){
    e.preventDefault();
    validarDatos();
    
};

//Eventos
miFormulario.addEventListener("submit", validarFormulario);

*/


//Swal
function exito(){
    swal({
        title: "¡Buen Trabajo!",
        text: "Formulario enviado exitosamente.",
        icon: "success",
        button: "LISTO",
    });
};
function error(){
    swal({
        title: "Algo salió mal :(",
        text: "Revisa los datos que cargaste y prueba nuevamente.",
        icon: "error",
        button: "REINTENTAR",
    });
};

//Bootstrap form validation
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
        }
        form.classList.add('was-validated')
        }, false)
    })
})()


