import React, {Component} from 'react';
import ContactForm from "./ContactForm";

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let title = '', copy = '';

        if (this.props.forHire) {
            title = 'Hire Jay';
            copy = 'Some text';
        } else {
            title = 'Contact Jay';
            copy = 'Some other text';
        }

        return (
            <div className={'section'}>
                <h2>{title}</h2>
                <p>{copy}</p>
                <ContactForm />
            </div>
        )
    }
}