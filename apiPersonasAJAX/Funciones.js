function cargarPersonas() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://sgemp.azurewebsites.net/api/Persona");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const personas = JSON.parse(xhr.responseText);

            const tablaBody = document.querySelector("#tablaPersonas tbody");
            tablaBody.innerHTML = ""; // Limpiar contenido previo

            personas.forEach((persona) => {
                const fila = document.createElement("tr");

                // Crear celda para el nombre
                const columnaNombre = document.createElement("td");
                columnaNombre.textContent = persona.nombre;
                fila.appendChild(columnaNombre);

                // Crear celda para el botón
                const columnaBoton = document.createElement("td");
                const boton = document.createElement("button");
                boton.textContent = "Eliminar";
                boton.addEventListener("click", () => eliminarPersona());
                columnaBoton.appendChild(boton);
                fila.appendChild(columnaBoton);

                // Agregar fila a la tabla
                tablaBody.appendChild(fila);
            });
        } else if (xhr.readyState === 4) {
            console.error("Error al cargar personas:", xhr.statusText);
        }
    };

    xhr.send();
}

function eliminarPersona() {
    
    }



window.onload = cargarPersonas;
