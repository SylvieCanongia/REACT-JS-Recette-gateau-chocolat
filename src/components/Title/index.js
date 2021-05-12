import React from 'react';

import './styles.scss';

const Title = () => (
  <header className="title">
    <div className="title__image">
      <img
        src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
    </div>
    <div className="title__content">
      <h1 className="title__content__heading">Je suis le titre</h1>
      <p className="title__content__description">Tatie crème - très facile</p>
    </div>
  </header>
);

export default Title;
