import React, { Component } from 'react';
import Education from './Education';
import PropTypes from 'prop-types';
class EducationList extends Component {
  render() {
    return (
      <div className="education_list">
        <h1>Education</h1>
        {this.props.educations.map((education, index) => {
          return <Education education={education} key={index}></Education>;
        })}
      </div>
    );
  }
}

EducationList.propTypes = {
  educations: PropTypes.array,
};

export default EducationList;
