function cargarPokemons() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=150");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const { results: pokemons } = JSON.parse(xhr.responseText);

            const tablaBody = document.querySelector("#tablaPokemons tbody");
            tablaBody.innerHTML = ""; // Limpiar contenido previo

            pokemons.forEach((pokemon) => {
                const fila = document.createElement("tr");

                // Crear celda para el nombre
                const columnaNombre = document.createElement("td");
                columnaNombre.textContent = pokemon.name;
                fila.appendChild(columnaNombre);

                // Crear celda para el botón
                const columnaBoton = document.createElement("td");
                const boton = document.createElement("button");
                boton.textContent = "Ver Detalles";
                boton.addEventListener("click", () => pedirDatosPokemon(pokemon.url));
                columnaBoton.appendChild(boton);
                fila.appendChild(columnaBoton);

                // Agregar fila a la tabla
                tablaBody.appendChild(fila);
            });
        }
    };

    xhr.send();
}

function pedirDatosPokemon(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const pokemon = JSON.parse(xhr.responseText);

            // Mostrar detalles del Pokémon
            const detallesPokemon = document.getElementById("detallesPokemon");
            detallesPokemon.classList.remove("hidden");

            const imagen = document.getElementById("pokemonImagen");
            imagen.src = pokemon.sprites.front_default || "";
            imagen.alt = `Imagen de ${pokemon.name}`;

            const nombre = document.getElementById("pokemonNombre");
            nombre.textContent = pokemon.name;

            const habilidadesLista = document.getElementById("pokemonHabilidades");
            habilidadesLista.innerHTML = ""; // Limpiar habilidades previas

            pokemon.abilities.forEach((habilidad) => {
                const listItem = document.createElement("li");
                listItem.textContent = habilidad.ability.name;
                habilidadesLista.appendChild(listItem);
            });

            const target = document.getElementById("detallesPokemon");
            const targetPosition = target.getBoundingClientRect().bottom + window.pageYOffset;
            target.scrollIntoView({bottom: targetPosition - 100, behavior: "smooth" });
        }
    };

    xhr.send();
}

window.onload = cargarPokemons;
