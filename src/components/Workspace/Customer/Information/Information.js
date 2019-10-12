import React from 'react';
import ToggleEdit from '../ToggleEdit/ToggleEdit';
import './Information.css';

export default function Information( { id, first, last, email, phone, saveEdit }) {
  return (
  
    <div id="CustomerInformation__container">
      <p id="CustomerInformation__fullName"> { first }</p>
      <p id="CustomerInformation__id"> ID: { id } </p>
      <span >PRODUCTO NOMBRE COMPLETO:</span>
      <ToggleEdit id={ id } description="First Name" property="name" val={ first } readOnlyVal={ first } saveEdit={saveEdit}/>
      <span >SKU:</span>
      <ToggleEdit id={ id } description="Last Name" property="SKUs" val={ last } readOnlyVal={ last } saveEdit={saveEdit}/>
      <span >COLOR:</span>
      <ToggleEdit id={ id } description="Email" property="colors" val={ email } readOnlyVal={ email } saveEdit={saveEdit}/>
      <span >LINK SIMPLE.RIPLEY:</span>
      <ToggleEdit id={ id } description="Phone" property="url" val={ phone } readOnlyVal={ phone } saveEdit={saveEdit}/>
    </div>
  )
}
