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
              <p> Please select a customer from the left. </p>
            </div>
          :
            currentCustomer
            ?
              <Customer id={currentCustomer.id}
                        first={currentCustomer.name}
                        last={currentCustomer.SKUs}
                        email={currentCustomer.colors}
                        phone={currentCustomer.url}
                        status={currentCustomer.monto}
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
