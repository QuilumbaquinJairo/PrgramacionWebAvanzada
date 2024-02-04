function obtenerDatos() {
    // Lógica para realizar una solicitud al servidor y mostrar el resultado
    fetch('http://localhost:3002/obtener')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error de red: ${response.status}`);
            }
            return response.json();
        })
        .then(datos => {
            // Mostrar los datos en el HTML
            const listaDatos = document.getElementById('lista-datos');
            // Limpiar la lista antes de agregar nuevos elementos
            listaDatos.innerHTML = '';

            // Agregar cada dato como un elemento de la lista
            datos.forEach(dato => {
                const elementoLista = document.createElement('li');
                elementoLista.textContent = `ID: ${dato.id}, Nombre: ${dato.nombre}`;
                elementoLista.classList.add('list-group-item');
                listaDatos.appendChild(elementoLista);
            });
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
            // Manejar el error mostrando un mensaje al usuario, por ejemplo:
            const listaDatos = document.getElementById('lista-datos');
            listaDatos.innerHTML = '<li>Error al obtener datos. Por favor, intenta nuevamente.</li>';
        });
}