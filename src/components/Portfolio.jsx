import React from 'react';

export default function Portfolio() {
    return (
        <div className={'section'}>
            <h2>Past Projects</h2>
            <nav>
                <span>Sort by skillset</span>
                <ul>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>Python</li>
                </ul>
            </nav>
            <div className={'gallery'}>
                <ul>
                    <li>Project One</li>
                    <li>Project Two</li>
                    <li>Project Three</li>
                    <li>Project Four</li>
                    <li>Project Five</li>
                    <li>Project Six</li>
                </ul>
            </div>
        </div>
    )
}