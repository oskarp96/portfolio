import React, { Component } from 'react';

class Skillbars extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                    <div className="progress" style={{height: "20px"}}>
                        <div className="progress-bar" role="progressbar" style={{width: "75%", backgroundColor: "#222"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">C#</div>
                    </div>
                    <br />
                    <div className="progress" style={{height: "20px"}}>
                        <div className="progress-bar" role="progressbar" style={{width: "55%", backgroundColor: "#222"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
                    </div>
                    <br />
                    <div className="progress" style={{height: "20px"}}>
                        <div className="progress-bar" role="progressbar" style={{width: "35%", backgroundColor: "#222"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">Java</div>
                    </div>
                    <br />
                    <div className="progress" style={{height: "20px"}}>
                        <div className="progress-bar" role="progressbar" style={{width: "60%", backgroundColor: "#222"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">SQL Server</div>
                    </div>
                    <br />
                    <div className="progress" style={{height: "20px"}}>
                        <div className="progress-bar" role="progressbar" style={{width: "40%", backgroundColor: "#222"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">React</div>
                    </div>
                    <br />
                    <div className="progress" style={{height: "20px"}}>
                        <div className="progress-bar" role="progressbar" style={{width: "80%", backgroundColor: "#222"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">HTML</div>
                    </div>
                    <br />
                    <div className="progress" style={{height: "20px"}}>
                        <div className="progress-bar" role="progressbar" style={{width: "60%", backgroundColor: "#222"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">CSS</div>
                    </div>
                    <br />
                    </div>
         );
    }
}
 
export default Skillbars;