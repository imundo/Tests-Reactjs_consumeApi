import React from 'react';
import ToggleEdit from '../ToggleEdit/ToggleEdit';
import './Information.css';

export default function Information( { id, first, last, email, phone, saveEdit }) {
  return (
  
    <div id="CustomerInformation__container">
      <p id="CustomerInformation__fullName"> { first }</p>
      <p id="CustomerInformation__id"> ID: { id } </p>
      <span >PRODUCTO NOMBRE COMPLETO:</span>
      <ToggleEdit id={ id } description="First Name" property="first" val={ first } readOnlyVal={ first } saveEdit={saveEdit}/>
      <span >SKU:</span>
      <ToggleEdit id={ id } description="Last Name" property="last" val={ last } readOnlyVal={ last } saveEdit={saveEdit}/>
      <span >COLOR:</span>
      <ToggleEdit id={ id } description="Email" property="email" val={ email } readOnlyVal={ email } saveEdit={saveEdit}/>
      <span >LINK SIMPLE.RIPLEY:</span>
      <ToggleEdit id={ id } description="Phone" property="phone" val={ phone } readOnlyVal={ phone } saveEdit={saveEdit}/>
    </div>
  )
}
