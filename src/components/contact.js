import React, {Component} from 'react';

export default class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <h1 className="heading">Contact</h1>
        <p>You can send me an email to my fake address: <a href="mailto:homer@simpson.com">homer@simpson.com</a></p>
        <p>Or feel free to drop by my house to have a chat: <strong>742 Evergreen Terrace, Springfield, Some State, United States</strong></p>
        <p><img src="http://i.imgur.com/Madkxrq.png" alt="Home" /></p>
      </section>
    );
  }
}
