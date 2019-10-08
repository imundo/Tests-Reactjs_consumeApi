import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="contact">
      <span>PRODUCTO:{props.name}</span><br />
  <span>SKUS:{props.skus}</span><br />
  <span>MONTO:{props.monto}</span><br />
  <span>URL:{props.url}</span><br />
  <span><img src={props.fullImage}  width="20%" height="20%"/></span>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired
};

export default Contact;
