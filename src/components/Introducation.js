import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Introducation extends Component {
  render() {
    return (
      <div className="introducation">
        <h1>Hello,</h1>
        <p>{this.props.content.toUpperCase()}</p>
      </div>
    );
  }
}

Introducation.propTypes = {
  content: PropTypes.string,
};
export default Introducation;
