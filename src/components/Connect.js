import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid padding text-center" id="connect">
                <h1 className="display-5">Connect</h1>
                <hr />
        <div className="row">
        <div className="col-md-4">
        <a href="https://www.linkedin.com/in/perssonoskar/" target="_blank"><i className="fas fa-link fa-2x" style={{ color: "#222", marginRight: "10px" }}></i></a>
        <p>LinkedIn</p>
        </div>
        <div className="col-md-4"><a href="mailto:oskar.persson1996@gmail.com">
            <i
              class="fas fa-envelope fa-2x"
              style={{ color: "#222", marginRight: "10px" }}
            ></i>
          </a><p>E-mail</p></div>
        <div className="col-md-4"><a href="https://github.com/oskarp96" target="_blank"><i className="fas fa-link fa-2x" style={{ color: "#222", marginRight: "10px" }}></i></a><p>Github</p></div>
        </div>
      </div>
    );
  }
}

export default Contact;
