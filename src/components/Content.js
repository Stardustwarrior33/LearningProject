import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
  state = {
    pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cc.logo.circle.svg/2000px-Cc.logo.circle.svg.png'
  };
  render() {
    return(
      <h3 className="Content-Text">
        <img src={this.state.pic} alt="Creative Commons" width="300" heigth="300"/>
      </h3>
    );
  }
}

Content.propTypes = {
  pic: PropTypes.string
};

export default Content;