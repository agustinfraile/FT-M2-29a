import React from 'react';
import estilos from '../components/Card.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <>
      <div className = {estilos.contenedor}>
        <input type="text" placeholder= "city ..." />
        <button onClick={() => props.onSearch("Buscando...")} className = {estilos.btn}>Search</button>
      </div>
    </>
  )
};