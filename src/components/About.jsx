import React from 'react';
import '../styles/section.css';

export default function About() {
    return (
        <div className={'section'}>
            <h2>About Jay</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
            <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula
                vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac
                turpis quis ligula lacinia aliquet. Mauris ipsum. </p>
            <h3>Skillset</h3>
            <ul>
                <li>
                    <span>Web Development</span>
                    <ul>
                        <li>React</li>
                        <li>ECMAScript5</li>
                        <li>CSS3</li>
                        <li>WordPress</li>
                        <li>.NET</li>
                        <li>jQuery</li>
                    </ul>
                </li>
                <li>Back End</li>
                <li>Design</li>
                <li>And more!</li>
            </ul>
        </div>
    )
}