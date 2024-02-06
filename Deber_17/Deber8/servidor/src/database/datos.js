const datosMock = [
    { username: "jairo", password: '12345' },
    { username: "carlos", password: '12345' },
    { username: "juan", password: '12345' },
];

module.exports = {
    obtenerDatos: () => {
        return datosMock;
    },
    verificarDato: (datoBuscado) => {
        return datosMock.some(dato => {
            return dato.username === datoBuscado.username && dato.password === datoBuscado.password;
        });
    },
};

