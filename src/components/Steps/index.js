import React from 'react';
import PropTypes from 'prop-types';

import './steps.scss';

const Steps = ({ steps }) => (
  <>
    <section className="steps">
      <ol className="steps__list">
        {steps.map((step) => (
          <li className="steps__list__item" key={step}>
            {step}
          </li>
        ))}
      </ol>
    </section>
  </>
);

Steps.propTypes = {
  // array of strings
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Steps;
