import React from 'react';
import classes from './Logo.module.scss';
import logoImage from './logo-img.svg';

const Logo = () => (
  <a href="/" className={classes.Logo}>
    <img className={classes.LogoImg} src={logoImage} alt="Logo" />
    <span className={classes.LogoText}>Recipes</span>
  </a>
);

export default React.memo(Logo);
