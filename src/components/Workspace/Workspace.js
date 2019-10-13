import React from "react";
import './Workspace.css';

import Customer from './Customer/Customer';
import CreateCustomer from './CreateCustomer/CreateCustomer';

function Workspace( { initialLoad, creating, createCustomer, currentCustomer, saveEdit, removeCustomer} ) {

  return (
    <div id="Workspace__container">
      {
        creating
        ?
          <CreateCustomer createCustomer={createCustomer}/>
        :
          initialLoad
          ?
            <div>
              <p> Por favor selecciona producto. </p>
            </div>
          :
            currentCustomer
            ?
              <Customer id={currentCustomer.id}
                        name={currentCustomer.name}
                        SKUs={currentCustomer.SKUs}
                        colors={currentCustomer.colors}
                        url={currentCustomer.url}
                        monto={currentCustomer.monto}
                        log={currentCustomer.fullImage}
                        saveEdit={saveEdit}
                        removeCustomer={removeCustomer}
                        />
                  : null
      }
    </div>
  )
}

export default Workspace;
