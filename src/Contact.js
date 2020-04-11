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
                <address>
                    <uli>
                        <li>
                        <a href="mailto:oskar.persson1996@gmail.com">Mail</a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/perssonoskar/">LinkedIn</a>
                        </li>
                    </uli>
                </address>
            </div>
        );
    }
}

export default Contact;