import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/cb4.png';

const Content = () => {
  return(
    <h3 className="Content-Text">
      <img src={logo} alt="Meme" />
    </h3>
  );
};

Content.propTypes = {
  con: PropTypes.string
};

export default Content;