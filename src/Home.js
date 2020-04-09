import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2>Who am I?</h2>
                <hr />
                <p>My name is Oskar, and I'm a student currently studying my last semester of informatics at Örebro University.
                    I'm passionate about everything that have to do with systems development, but particularly in programming. 
                    Techniques I've gotten especially interested in are .NET (C#), JavaScript, React, HTML, CSS and SQL. Head over to
                    the <Link to="/about">about page</Link> if you wanna know more about me!
                </p>
            </div>
         );
    }
}
 
export default Home;