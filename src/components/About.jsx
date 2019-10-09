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
            <h3>Skills Summary</h3>
            <ul>
                <li>
                    <span>Animals</span>
                    <ul>
                        <li>Dog</li>
                        <li>Frog</li>
                        <li>Pony</li>
                        <li>Ladybug</li>
                    </ul>
                </li>
                <li>
                    <span>Colors</span>
                    <ul>
                        <li>Blue</li>
                        <li>Green</li>
                        <li>Yellow</li>
                    </ul>
                </li>
                <li>
                    <span>Shapes</span>
                    <ul>
                        <li>Triangle</li>
                        <li>Circle</li>
                        <li>Pentagon</li>
                    </ul>
                </li>
                <li>And more!</li>
            </ul>
        </div>
    )
}