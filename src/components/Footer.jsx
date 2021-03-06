import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer my-2">
      <small>
        <a className="text-secondary" href="https://github.com/miya/to-do" target="_blank" rel="noopener noreferrer">Github</a>
        <FontAwesomeIcon className="text-secondary extra-link-icon mb-1 ml-1 mr-3" icon={faExternalLinkAlt} />
      </small>
      <small className="text-secondary">Copyright (C) 2021 to-do</small>
    </footer>
  );
};

export default Footer;
