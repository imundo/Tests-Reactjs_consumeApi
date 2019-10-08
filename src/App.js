import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

import ContactList from "./components/ProductoList";

class App extends Component {
  // default state object
  state = {
    contacts: []
  };

  componentDidMount() {
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://ripley-test-isaac.herokuapp.com/productos"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    axios
      .get(proxyurl + url)
      .then(response => {
        // create an array of contacts only with relevant data
        const newContacts = response.data.users.map(c => {
          return {
            id: c.id,
            name: c.data.name,
	    skus: c.data.SKUs,
	    monto: c.data.monto,
            fullImage: c.data.fullImage,
            url: c.data.url
          };
        });

        // create a new "state" object without mutating
        // the original state object.
        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Contact Manager</h1>
        </header>

        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
