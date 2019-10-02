import React, {Component} from 'react';
import "../styles/header.css";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.renderContact = this.renderContact.bind(this);
    }

    renderContact() {
        if (this.props.forHire) return 'Hire Me';
        return 'Contact Me';
    }

    render() {
        return (
            <header>
                <h1>Jay Billings</h1>
                <nav>
                    <ul>
                        <li>About</li>
                        <li>Past Projects</li>
                        <li>{this.renderContact()}</li>
                    </ul>
                </nav>
            </header>
        )
    }
}