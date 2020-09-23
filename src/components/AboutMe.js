import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AboutMe extends Component {
  render() {
    return (
      <div className="about_me">
        <h1>ABOUT ME</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

AboutMe.propTypes = {
  content: PropTypes.string,
};
export default AboutMe;
