import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Menu from './components/menu';
import Contact from './components/contact';

class App extends Component {
  state = {
    homePage: true,
    menuPage: false,
    contactPage: false,
  };
  render() {
    if (this.state.homePage) {
      return (
        <React.Fragment>
          <Header
            onMenu={this.switchMenu}
            onHome={this.switchHome}
            onContact={this.switchContact}
          />
          <Home />
        </React.Fragment>
      );
    } else if (this.state.menuPage) {
      return (
        <React.Fragment>
          <Header
            onMenu={this.switchMenu}
            onHome={this.switchHome}
            onContact={this.switchContact}
          />
          <Menu />
        </React.Fragment>
      );
    } else if (this.state.contactPage) {
      return (
        <React.Fragment>
          <Header
            onMenu={this.switchMenu}
            onHome={this.switchHome}
            onContact={this.switchContact}
          />
          <Contact />
        </React.Fragment>
      );
    }
  }
  switchMenu = () => {
    this.setState({ homePage: false, menuPage: true, contactPage: false });
  };
  switchHome = () => {
    this.setState({ homePage: true, menuPage: false, contactPage: false });
  };
  switchContact = () => {
    this.setState({ homePage: false, menuPage: false, contactPage: true });
  };
}

export default App;
