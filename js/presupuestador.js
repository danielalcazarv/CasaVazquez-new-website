//Saludo usuario
const mostrarSaludo = () => {
    const objIngresado = JSON.parse(localStorage.getItem('datosAlmacenados'));
    const contenido = document.querySelector('.saludo');
    contenido.innerHTML = "Hola "+ objIngresado +"!";
}
mostrarSaludo();

//Variables
const administracion = document.getElementById('administracion');
const consorcio = document.getElementById('consorcio');
const informe = document.getElementById('informe');
const observaciones = document.getElementById('obser');
const miPresu = document.getElementById('miPresu');
const select = document.querySelector('#presuSelected');
const tipo = document.getElementById('tipoTrabajo');
const url ="../data/lista-de-precios.json";

function useState() {
    let _state = null;
    function getState() {
    return _state;
    }
    function setState(data) {
    _state = [...data];
    }
    return [getState, setState];
}

const [getState, setState] = useState();

function selectedOptions(data){
    const {id,tipo,nombre,precio,descrip} = data;
    return`
    <option value="${id}">${nombre}</option>
    `;
}

function clickBox(e){
    const valor = e.target.value;
    const data = getState();

    const filtroItems = data.filter((item)=>
        item.tipo.includes(valor)
    );

    renderProjectsToDom(filtroItems);
}

async function getData(url) {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    return data;
}

function renderProjectsToDom(data) {
    let items = data.map((item) => selectedOptions(item)).join("");
    select.innerHTML = items;
}

async function handleInitialLoad() {
    const data = await getData(url);
    setState(data);
    renderProjectsToDom(getState());
}

tipo.addEventListener("change",clickBox);
window.addEventListener("DOMContentLoaded", handleInitialLoad);