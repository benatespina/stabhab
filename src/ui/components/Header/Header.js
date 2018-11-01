import React from 'react';
import Image from './../Image/Image';
import './Header.css';

export default () => (
  <header className="header">
    <div className="header__content">
      <h1 className="header__title">StabHab</h1>
      <Image className="header__logo" src="images/logo.png" alt="StabHab" />
    </div>
    <hr className="header__separator" />
  </header>
);
