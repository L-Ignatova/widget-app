import React from 'react';

const Link = ({ href, className, children }) => {
  const handleClick = (ev) => {
    ev.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a 
      href={href}
      className={className}
      onClick={handleClick}
    >{children}</a>
  );
};

export default Link;