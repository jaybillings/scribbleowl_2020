import React, {Component} from 'react';

import ScrollTop from "../ScrollTop";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "About Jay",
      copy: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
        "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. "
      ]
    };
  }

  render() {
    return ([
      <div id={'about'} className={'section'}>
        <h2>{this.state.title}</h2>
        {this.state.copy.map((line, iter) => <p key={iter}>{line}</p>)}
        <ScrollTop/>
      </div>
    ])
  }
}