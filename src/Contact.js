import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <hr />
        <address>
          <a href="mailto:oskar.persson1996@gmail.com">
            <i
              class="fas fa-envelope fa-2x"
              style={{ color: "#222", marginRight: "10px" }}
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/perssonoskar/" target="_blank">
            <i
              class="fab fa-linkedin-in fa-2x"
              style={{ color: "#222", marginRight: "10px" }}
            ></i>
          </a>
        </address>
      </div>
    );
  }
}

export default Contact;
