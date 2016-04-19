import React, {Component} from 'react';

export default class About extends Component {
  render() {
    return (
      <section className="about">
        <h1 className="heading">About Me</h1>
        <p>My name is Homer, I live in Springfield and I like beer. A lot.</p>
        <p><img src="http://i.imgur.com/U52hIbH.png" alt="I am Homer Simpson" /></p>
      </section>
    )
  }
}
