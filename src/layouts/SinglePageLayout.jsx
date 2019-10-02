import React, {Component} from 'react';

import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export default class SinglePageLayout extends Component {
    render() {
        const forHire = true; // todo: Put this in config

        return [
            <Header forHire={forHire}/>,
            <About />,
            <Portfolio/>,
            <Contact forHire={forHire}/>
        ]
    }
}