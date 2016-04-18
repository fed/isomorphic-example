// routes.js
import React, {Component} from 'react';
import {Route, IndexRoute, Link} from 'react-router';

// Main component
class App extends Component {
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

// Pages
class Home extends Component {
  render() {
    return (
      <section className="home">
        <h1>Home</h1>
        <p>Some home page content</p>
      </section>
    )
  }
}

class About extends Component {
  render() {
    return (
      <section className="about">
        <h1>About</h1>
        <p>Some about page content</p>
      </section>
    )
  }
}

class Work extends Component {
  render() {
    return (
      <section className="work">
        <h1>Work</h1>
        <p>Some work page content</p>
      </section>
    );
  }
}

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <h1>Contact</h1>
        <p>Some contact page content</p>
      </section>
    );
  }
}

class NoMatch extends Component {
  render() {
    return (
      <section className="error">
        <h1>404: Not Found</h1>
        <p>Page not found :(</p>
      </section>
    );
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="work" component={Work}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NoMatch}/>
  </Route>
);
