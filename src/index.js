import React from 'react';
import ReactDOM from 'react-dom';
import Lista from './Lista';

ReactDOM.render(
  <div>
    <Lista titulo="Perfil profesional" img="account-box-outline" />
    <Lista titulo="Registro de programas" img="text-box-plus-outline"  />
    <Lista titulo="Docentes" img="account-search-outline" />
    <Lista titulo="Postulantes" img="account-question-outline"/>
    <Lista titulo="Programas" img="text-box-outline" />
    <Lista titulo="Certificaciones docentes" img="certificate-outline" />
  </div>,
  document.getElementById('root')
);