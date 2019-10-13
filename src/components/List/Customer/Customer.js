import React from 'react';
import './Customer.css';

export default function Customer( { id, name, SKUs, imagen, selectCustomer } ) {
  return (
    <div className="Customer__listName" onClick={()=>selectCustomer(id)}>
      <span>PRODUCTO:{ name }</span>
      <span>SKU:{ SKUs }</span>
      <br></br>
      <span><img src={ imagen }  width="50px" height="50px"></img></span>
    </div>
  )
}
