//************Login****************
const miLogin = document.getElementById('login');
let userNameLogged = "";

const validar = (usuario) => {
    const uname = document.getElementById('user').value;
    const pword = document.getElementById('password').value;
    let logged = false;

    usuario.forEach((userLogged) =>{
        const {user, nombre, pass} = userLogged;
        if (uname == user && pword == pass){
            logged = true;
            userNameLogged = nombre;
        }
    })

    if (logged){
        window.location.href="presupuestador.html";
        const datoIngresadoLS = (clave, valor) => { localStorage.setItem(clave,valor)};
        datoIngresadoLS("datosAlmacenados", JSON.stringify(userNameLogged));
    }else{
        alert("Usuario Incorrecto");
    }
}

const validarUserJson = () =>{
    fetch ("../data/users.json")
        .then(respuesta => {
            return respuesta.json();
        })
        .then((datos) => {
            validar (datos);
        })
        .catch((err) => {
            console.log(err)
        });
};

function validarLogin (e){
    e.preventDefault();
    validarUserJson();
}

if (miLogin){
    miLogin.addEventListener("submit", validarLogin);
}

//************Presupuestador****************
const mostrarSaludo = () => {
    const objIngresado = JSON.parse(localStorage.getItem("datosAlmacenados"));
    console.log(objIngresado);
    const contenido = document.querySelector('.saludo');
    contenido.innerHTML = "Hola "+ objIngresado +"!";
}

mostrarSaludo();