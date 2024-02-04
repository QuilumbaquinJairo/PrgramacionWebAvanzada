const datosMock = [
    { id: 2, nombre: 'Jairo' },
    { id: 3, nombre: 'Carlos' },
    { id: 4, nombre: 'Perros' },
];

module.exports = {
    obtenerDatos: () => {
        return datosMock;
    },
    insertarDato: (nuevoDato) => {
        if (nuevoDato && typeof nuevoDato === 'object' && nuevoDato.hasOwnProperty('id') && nuevoDato.hasOwnProperty('nombre')) {
            datosMock.push(nuevoDato);
            return true; // Indicar que la inserción fue exitosa
        } else {
            console.error('El dato proporcionado no es válido.');
            return false; // Indicar que la inserción falló debido a un dato no válido
        }
    },
};
