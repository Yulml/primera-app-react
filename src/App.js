import logo from './logo.svg';
import './App.css';
import Nombre from './Nombre';
import React from 'react';

function App() {
  return (
    <div className='center'>
    <Nombre nombre="Julio Moreno López" saludo="Hola" color="blue" />
    <Nombre nombre="Yul Moreno López" saludo="Hola" color="red" />
    </div>
  );
}

export default App;
