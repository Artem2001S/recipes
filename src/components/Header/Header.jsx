import React from 'react';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import classes from './Header.module.scss';

const Header = () => (
  <header className={classes.Header}>
    <Logo />
    <Navigation />
  </header>
);

export default React.memo(Header);
