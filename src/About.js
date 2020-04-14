import React, { Component } from "react";
import oskar from './assets/oskar_bild.jpg';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about-me container-fluid padding" id="about">
        <div className="row">
          <div className="col-12">
          <h1 className="display-5 text-center">About me</h1>
        <hr />
        <img src={oskar} id="pic-oskar"/>
        <p className="lead">My name is Oskar, and I'm a student currently studying my last semester of Information Systems at Örebro University.
        I'm passionate about everything that have to do with systems development, but particularly in programming - both front-end and back-end.
        <br />
        </p>
        <p className="lead">
        When I'm not coding, I enjoy writing music and playing the drums in my band. I'm also very interested in gaming and training.
        </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
