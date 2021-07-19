import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={classes.Nav}>
      <ul className={classes.NavList}>
        <li className={classes.NavItem}>
          <NavLink
            className={classes.NavLink}
            to="/"
            activeClassName={classes.CurrentPageLink}
            exact
          >
            Recipes
          </NavLink>
        </li>
        <li className={classes.NavItem}>
          <NavLink
            className={classes.NavLink}
            to="/some"
            activeClassName={classes.CurrentPageLink}
            exact
          >
            SomePage
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(Navigation);
