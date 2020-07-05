import React, { Component } from 'react';

class Home extends Component {
  state = {};
  render() {
    return (
      <main>
        <div id='intro-div'>
          <h2>Aviachi</h2>
          <p>Lavish, but distinguished. Refined, yet authentic</p>
          <p>
            The best Italian food in town, Come and join us! No reservation
            required!
          </p>
        </div>
        <div id='about-div'>
          <h3>About Us</h3>
          <p>
            The freshest seasonal ingredients daily, personally selected by our
            kitchen. Using traditionally recipes from the old country. We are
            here to serve.
          </p>
        </div>
      </main>
    );
  }
}

export default Home;
