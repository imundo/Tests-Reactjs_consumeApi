import React from 'react';
import ToggleEdit from '../ToggleEdit/ToggleEdit';
import './Information.css';

export default function Information( { id, name, SKUs, colors, url, saveEdit }) {
  return (
  
    <div id="CustomerInformation__container">
      <p id="CustomerInformation__fullName"> { name }</p>
      <p id="CustomerInformation__id"> ID: { id } </p>
      <span >PRODUCTO NOMBRE COMPLETO:</span>
      <ToggleEdit id={ id } description="Name" property="name" val={ name } readOnlyVal={ name } saveEdit={saveEdit}/>
      <span >SKU:</span>
      <ToggleEdit id={ id } description="SKUs" property="SKUs" val={ SKUs } readOnlyVal={ SKUs } saveEdit={saveEdit}/>
      <span >COLOR:</span>
      <ToggleEdit id={ id } description="colors" property="colors" val={ colors } readOnlyVal={ colors } saveEdit={saveEdit}/>
      <span >LINK SIMPLE.RIPLEY:</span>
      <ToggleEdit id={ id } description="url" property="url" val={ url } readOnlyVal={ url } saveEdit={saveEdit}/>
    </div>
  )
}
