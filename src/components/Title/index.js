import React from 'react';

import PropTypes from 'prop-types';

import './title.scss';

const Title = ({
  title,
  author,
  difficulty,
  thumbnail,
}) => (
  <header className="title">
    <div className="title__image">
      <img
        src={thumbnail}
        alt=""
      />
    </div>
    <div className="title__content">
      <h1 className="title__content__heading">{title}</h1>
      <p className="title__content__description">{author} - {difficulty}</p>
    </div>
  </header>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Title;
