import React, { useState } from 'react';

function Formulario({datosConsulta}){

  // State del componente
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })

  //Cambiar el state
  const handleChange = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const consultarClima = e => {
    e.preventDefault();

    // Pasar hacia el componente principal la busqueda del usuario
    datosConsulta(busqueda);
  }

  return(
    <form
      onSubmit={consultarClima}
    >
      <div className="input-field col s12">
        <input 
          type="text"
          name="ciudad"
          id="ciudad"
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select name="pais" onChange={handleChange}>
          <option value="">Selecciona un país</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CR">Costa Rica</option>
          <option value="CO">Colombia</option>
          <option value="ES">España</option>
          <option value="VE">Venezuela</option>
          <option value="PE">Perú</option>
        </select>
      </div>
      <div className="input-field col s12">
        <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Ver clima"/>
      </div>
    </form>
  );
}
export default Formulario;