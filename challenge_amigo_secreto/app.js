//Desafío amigo Secreto
//Cristian Peña N

let listaAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (nombreAmigo == "") {
        alert("Por favor ingrese un nombre");
        return;
    }

    listaAmigos.push(nombreAmigo);
    let ul = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = nombreAmigo;
    ul.appendChild(li);
    inputAmigo.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Se necesitan al menos 2 personas para el sorteo");
        return;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    let randomIndex = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[randomIndex];
    
    let li = document.createElement("li");
    li.textContent = `¡${amigoSeleccionado} ha sido seleccionado!`;
    resultado.appendChild(li);
}


