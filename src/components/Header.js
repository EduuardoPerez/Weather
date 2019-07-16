import React from 'react';
/*
  Todos los componentes de hooks son stateless functional por lo tanto
  no se importa Components. Solo se importa React

  Existen diferentes formas en las que se pueden generar, mientras sea
  una función esta bien como se genera
*/

function Header({titulo}){
  return(
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">{titulo}</a>
      </div>
    </nav>
  );
}
export default Header;