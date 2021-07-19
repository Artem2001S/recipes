import React from 'react';
import classes from './Logo.module.scss';
import logoImage from './logo-img.svg';

const Logo = () => (
  <div className={classes.Logo}>
    <img className={classes.LogoImg} src={logoImage} alt="Logo" />
    <span className={classes.LogoText}>Recipes</span>
  </div>
);

export default React.memo(Logo);
