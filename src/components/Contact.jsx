import React, {Component} from 'react';

export default class Contact extends Component {
    render() {
        if (this.props.forHire) return <h2>Hire Jay</h2>;
        return <h2>Contact Jay</h2>;
    }
}