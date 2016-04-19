import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  componentDidMount() {
    document.body.className = '';
  }

  render() {
    return (
      <div className="container">
        <h1>Isomorphic JavaScript Example</h1>

        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {this.props.children}
      </div>
    )
  }
}
