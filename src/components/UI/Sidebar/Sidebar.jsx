import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import classes from './Sidebar.module.scss';
import { useRef } from 'react';

const Sidebar = ({ visible, children, right, left = true, close }) => {
  const targetRef = useRef(null);

  const contentClasses = classNames(
    { [classes.Right]: right },
    { [classes.Left]: left },

    classes.SidebarContent
  );

  useEffect(() => {
    visible
      ? disableBodyScroll(targetRef)
      : enableBodyScroll(targetRef);
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [visible]);

  const stopPropagation = useCallback((e) => e.stopPropagation(), []);

  return visible ? (
    <div ref={targetRef} className={classes.SidebarOverlay} onClick={close}>
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
