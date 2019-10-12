import React from "react";
import PropTypes from "prop-types";

// import the Contact component
import Contact from "./Producto";

function ContactList(props) {
  return (
    <div>{props.contacts.map(c => <Contact key={c.id} name={c.name} skus={c.skus} monto={c.monto} fullImage={c.fullImage} url={c.url} />)}</div>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactList;
