import React, { Component } from 'react';
import Skillbars from './Skillbars';

class Skills extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid padding" id="skills">
            <div className="row">
              <div className="col-12 text-center padding">
              <h1 className="display-5 text-center">Skills</h1>
            <hr className="my-4" />
            <i className="fas fa-code fa-3x"></i>
            <br />
            <br />
            <p className="lead">
                I've primarily worked with the .NET Framework and .NET Core, aswell as JavaScript, HTML, CSS and the
                JS library React, which this website is built with. On the database side, I've got good knowledge of
                SQL Server. 
            </p>
              </div>
              <Skillbars />
            </div>
          </div>
         );
    }
}
 
export default Skills;