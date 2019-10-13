import React from 'react';
import ToggleEdit from '../ToggleEdit/ToggleEdit';
import './Status.css';

export default function Status( { id, monto, saveEdit } ) {
  return (
    <div id="CustomerStatus__container">
      <h5> PRECIO DEL PRODUCTO: </h5>
      <ToggleEdit id={ id } description="PRECIO DEL PRODUCTO:" property="monto" val={ monto } readOnlyVal={ monto } saveEdit={saveEdit}/>
    </div>
  )
}
