import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classes from './Sidebar.module.scss';
import classNames from 'classnames';

const Sidebar = ({ visible, children, right, left = true, close }) => {
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
  visible: PropTypes.bool,
  children: PropTypes.node,
  right: PropTypes.bool,
  left: PropTypes.bool,
  close: PropTypes.func,
};

export default React.memo(Sidebar);
