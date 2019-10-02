import React, {Component} from 'react';

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.renderContact = this.renderContact.bind(this);
        this.renderHire = this.renderHire.bind(this);
    }

    renderContact() {
        return (
            <div className={'section'}><h2>Contact Jay</h2></div>
        )
    }

    renderHire() {
        return (
            <div className={'section'}><h2>Hire Jay</h2></div>
        )
    }

    render() {
        if (this.props.forHire) return this.renderHire();
        return this.renderContact();
    }
}