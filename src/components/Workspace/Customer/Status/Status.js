import React from 'react';
import ToggleEdit from '../ToggleEdit/ToggleEdit';
import './Status.css';

export default function Status( { id, status, saveEdit } ) {
  return (
    <div id="CustomerStatus__container">
      <h5> PRECIO DEL PRODUCTO: </h5>
      <ToggleEdit id={ id } description="PRECIO DEL PRODUCTO:" property="status" val={ status } readOnlyVal={ status } saveEdit={saveEdit}/>
    </div>
  )
}
