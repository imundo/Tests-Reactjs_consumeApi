import React from "react";
import './Customer.css';

import Information from './Information/Information';
import Status from './Status/Status';
import RepairLog from './RepairLog/RepairLog';
import RemoveCustomer from './RemoveCustomer/RemoveCustomer';

function Customer({ id, name, SKUs, colors, url, monto, log, saveEdit, removeCustomer }) {

    return (
      <div id="Customer__container">
        <Information id={ id } name={ name } SKUs={ SKUs } colors={ colors } url={ url } saveEdit={saveEdit}/>
        <Status id={ id } monto={ monto } saveEdit={saveEdit}/>
        <RepairLog id={ id } log={ log } saveEdit={saveEdit}/>
        <RemoveCustomer id={ id } removeCustomer={removeCustomer}/>
      </div>
    )
}

export default Customer;
