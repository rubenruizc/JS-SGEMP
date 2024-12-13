function pedirDatos() {
    var miLlamada = new XMLHttpRequest();

    miLlamada.open("GET", "https://pokeapi.co/api/v2/pokemon");

    //Definicion estados
    miLlamada.onreadystatechange = function () {
        if (miLlamada.readyState < 4) {
            //aquí se puede poner una imagen de un reloj o un texto “Cargando”
            document.getElementById("cargando").innerHTML = "Cargando";
        }
        else {
            if (miLlamada.readyState == 4 && miLlamada.status == 200) {
                var arrayPokemons = JSON.parse(miLlamada.responseText);

                document.getElementById("cargando").innerHTML = "";
                arrayPokemons.results.forEach(p => {
                    document.getElementById("cargando").innerHTML += p.name + "<br>";
                })
            }
        }
    };

    miLlamada.send();

}

function pedirDatosPokemon(url) {
    var miLlamada = new XMLHttpRequest();

    miLlamada.open("GET", url);

    //Definicion estados
    miLlamada.onreadystatechange = function () {
        if (miLlamada.readyState < 4) {
            //aquí se puede poner una imagen de un reloj o un texto “Cargando”
            document.getElementById("cargando").innerHTML = "Cargando";
        }
        else {
            if (miLlamada.readyState == 4 && miLlamada.status == 200) {
                var arrayPokemons = JSON.parse(miLlamada.responseText);

                document.getElementById("cargando").innerHTML = arrayPokemons.name;
                
            }
        }
    };

    miLlamada.send();

}

window.onload = function () {
    document.getElementById("enviar").addEventListener("click", function () {
        if (document.getElementById("cargando").innerHTML == "") {
            pedirDatos();
        } else {
            document.getElementById("cargando").innerHTML = "";
        }
    });
}