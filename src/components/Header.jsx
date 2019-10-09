import React, {Component} from 'react';
import app from '../services/socketio';

import "../styles/header.css";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {title: '', sections: []};

        this.miniCRMService = app.service('mini-crm');
    }

    componentDidMount() {
        this.miniCRMService.get('header')
            .then(result => {
                console.log(result);
                this.setState({title: result.data.title, sections: result.data.sections});
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        return (
            <header>
                <h1>{this.state.title}</h1>
                <nav>
                    <ul>
                        {
                            this.state.sections.map(section => <li>{section.title}</li>)
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}