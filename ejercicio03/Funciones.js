window.onload = inicioEventos;

function inicioEventos() {
    document.getElementById('cars').addEventListener('change', saludar) 
}

function saludar (){
    const audi = ["A4 Sedan", "A3 Sportback", "A6 Cabriolet", "TT Coupé"]
    const citroen = ["C3 Sedan", "C4 Coupe", "C5 Coupe", "C5 Sedan"]
    const skoda = ["Octavia", "Superb" , "Kodiaq" , "Kamiq" , "Enyaq iV"]
    const opel = ["Corsa" , "Astra" , "Mokka", "Grandland", "Crossland"]

    var listado = document.getElementById("listadoCoches")

    var elementoSeleccionado = document.getElementById("cars").value.toLocaleLowerCase();

    listado.innerHTML = ""

    switch(elementoSeleccionado){
        case "audi":
            audi.forEach(rellenarListado);
            break;
        case "citroen":
            citroen.forEach(rellenarListado);
            break;
        case "skoda":
            skoda.forEach(rellenarListado);
            break;
        case "opel":
            opel.forEach(rellenarListado);
            break;
        default:
            alert("No se han encontrado coches para esa marca");
            break;

    }

}



function rellenarListado(coche){
    var listado = document.getElementById("listadoCoches")
    let elemento = document.createElement("li");

    elemento.innerHTML = coche

    listado.appendChild(elemento);
}