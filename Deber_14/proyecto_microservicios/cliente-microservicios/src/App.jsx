// Importar las dependencias necesarias
import { useEffect, useState } from 'react';
import axios from 'axios';

// Definir el componente principal de la aplicación
function App() {
  // Definir estados para almacenar los datos de los microservicios
  const [microservicio1Data, setMicroservicio1Data] = useState('');
  const [microservicio2Data, setMicroservicio2Data] = useState('');
  const [microservicio3Data, setMicroservicio3Data] = useState('');

  // Efecto de efecto secundario para cargar datos al montar el componente
  useEffect(() => {
    // Consumir Microservicio 1
    axios.get('http://localhost:3001')
      .then(response => setMicroservicio1Data(response.data))
      .catch(error => console.error(error));

    // Consumir Microservicio 2
    axios.get('http://localhost:3002')
      .then(response => setMicroservicio2Data(response.data))
      .catch(error => console.error(error));

    axios.get('http://localhost:3003')
    .then(response => setMicroservicio3Data(response.data))
    .catch(error => console.error(error));
  }, []);

  // Renderizar la interfaz de usuario
  return (
    <div>
      <h1>Cliente React con Vite</h1>
      <p>Microservicio 1: {microservicio1Data}</p>
      <p>Microservicio 2: {microservicio2Data}</p>
      <p>Microservicio 3: {microservicio3Data}</p>
    </div>
  );
}

// Exportar el componente principal
export default App;
