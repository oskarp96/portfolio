import React, { Component } from "react";

class Skillbars extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid padding">
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "75%", backgroundColor: "#222" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <b>C#</b>
          </div>
        </div>
        <br />
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "55%", backgroundColor: "#222" }}
            aria-valuenow="55"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <b>JavaScript</b>
          </div>
        </div>
        <br />
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "35%", backgroundColor: "#222" }}
            aria-valuenow="35"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <b>Java</b>
          </div>
        </div>
        <br />
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "60%", backgroundColor: "#222" }}
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <b>SQL Server</b>
          </div>
        </div>
        <br />
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "40%", backgroundColor: "#222" }}
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <b>React</b>
          </div>
        </div>
        <br />
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "80%", backgroundColor: "#222" }}
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <b>HTML</b>
          </div>
        </div>
        <br />
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "60%", backgroundColor: "#222" }}
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <b>CSS</b>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Skillbars;
