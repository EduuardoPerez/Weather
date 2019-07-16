import React, { useState } from 'react';

/*
  Gracias a los hooks es posible trabajar con el state cuando se tiene una
  función. Ya no es necesario declarar la clase, o sea, trabajar con un class component

  Con los hooks el state puede ser cualquier tipo de dato, no solo un obj

  Pero se debe importar el useState
*/
function Formulario(){

  // State del componente
  // busqueda es igual al state y guardar busqueda es igual a this.setState
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })

  //Cambiar el state
  /*
    Tomamos una copia del state para no perder la referencia del otro campo
  */
  const handleChange = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })

    console.log(busqueda);
  }

  return(
    <form>
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