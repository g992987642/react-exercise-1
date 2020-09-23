import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeadPortrait extends Component {
  render() {
    return (
      <img className="headPortrait" src={this.props.src} alt={this.props.alt} />
    );
  }
}

HeadPortrait.propTypes = {
  src: PropTypes.any,
  alt: PropTypes.string,
};
export default HeadPortrait;
