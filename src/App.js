/*
  Con hooks no existen los métodos del ciclo de vida, en su defecto
  se importa el hook useEffect
*/
import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Error from './components/Error'

function App() {

  // State principal
  // ciudad, pais y error corresponde al state, los guardar* corresponden al this.setState
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError]= useState(false);
  const [resultado, guardarResultado]= useState({});

  /*
    El segundo parametro corresponde a un arreglo de dependencias que dirá
    que parte del state tiene que estar escuchando el useEffect para ejecutarse

    useEffect toma el lugar de componentDidMount y el de componentDidUpdate

    La doc de React recomienda consumir la API dentro del useEffect
  */
  useEffect(() => {

    // Prevenir ejecución
    if(ciudad==='') return;

    // Consumir la API
    const consultarAPI = async () => {
      
      const appId = 'f4a9cbe9e3b579c082f286bfcaff827a';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

      // Consultar la URL
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarResultado(resultado);
    }

    consultarAPI();
  }, [ciudad, pais]);

  const datosConsulta = datos => {

    // Validar que ambos campos estén
    if(datos.ciudad==='' || datos.pais===''){
      guardarError(true);
      return;
    }

    // Si ciudad y pais existen, agregarlos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  // Cargar un componente condicionalmente
  let componente;
  if(error){
    // hay un error, mostrarlo
    componente = <Error mensaje="Ambos campos son obligatorios" />
  } else {
    // Mostrar el clima
    componente = null;
  }

  return (
    <div className="App">
      <Header 
        titulo="Clima React App"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario
                datosConsulta={datosConsulta}
              />
            </div>
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;