class Persona {
    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
}

function saludar() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    const persona = new Persona(nombre, apellidos);

    alert(`Hola ${persona.nombre} ${persona.apellidos}`);
}

// Para cuando se cargue la página
window.onload = function () {
    document.getElementById('btn').addEventListener('click', function() {
        saludar();
    });
}