import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classes from './Sidebar.module.scss';
import classNames from 'classnames';

const Sidebar = ({ visible, close, children, right, left = true }) => {
  const contentClasses = classNames(
    { [classes.Right]: right },
    { [classes.Left]: left },

    classes.SidebarContent
  );

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [visible]);

  const stopPropagation = useCallback((e) => e.stopPropagation(), []);

  return visible ? (
    <div className={classes.SidebarOverlay} onClick={close}>
      <div className={contentClasses} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  ) : null;
};

Sidebar.propTypes = {
  children: PropTypes.node,
  right: PropTypes.bool,
  left: PropTypes.bool,
};

export default React.memo(Sidebar);
