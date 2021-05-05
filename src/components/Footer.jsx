import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer my-2">
      <small>
        <a className="text-secondary" href="https://github.com/miya/to-do">Github</a>
        <FontAwesomeIcon className="text-secondary extra-link-icon mb-1 ml-1" icon={faExternalLinkAlt} />
        <text> / </text>
      </small>
      <small className="text-secondary">Copyright (C) 2021 to-do</small>
    </footer>
  );
};

export default Footer;
