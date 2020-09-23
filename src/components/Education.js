import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Education extends Component {
  render() {
    return (
      <div className="education_item" key={`education_item${this.props.key}`}>
        <div className="education_year">{this.props.education.year}</div>
        <div className="education_description">
          <h2 className="education_description_title">
            {this.props.education.title}
          </h2>
          <p className="education_description_content">
            {this.props.education.content}
          </p>
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  education: PropTypes.object,
  key: PropTypes.number,
};
export default Education;
