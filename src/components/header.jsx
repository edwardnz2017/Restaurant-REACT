import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1 onClick={props.onHome} id='name'>
        Aviachi
      </h1>
      <ul>
        <li onClick={props.onHome}>Home</li>
        <li onClick={props.onMenu}>Menu</li>
        <li onClick={props.onContact}>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
