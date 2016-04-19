import React, {Component} from 'react';

export default class NoMatch extends Component {
  render() {
    return (
      <section className="no-match">
        <h1 className="heading">404: Page Not Found</h1>
        <p><img src="http://i.imgur.com/huQD3wk.gif" alt="Page Not Found" /></p>
      </section>
    );
  }
}
