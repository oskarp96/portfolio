import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h2>Contact</h2>
                <hr />
                <p>Feel free to contact me at: oskar.persson1996@gmail.com.</p>
                <p><a href="https://www.linkedin.com/in/perssonoskar/">My LinkedIn profile</a></p>
            </div>
        );
    }
}

export default Contact;