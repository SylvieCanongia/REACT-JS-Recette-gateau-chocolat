import React from 'react';
import PropTypes from 'prop-types';

import IngredientItem from 'src/components/Ingredients/IngredientItem';
import './ingredients.scss';

const Ingredients = ({ ingredients }) => (
  <section className="ingredients">
    <ul className="ingredients__list">
      {ingredients.map(({
        id,
        quantity,
        unit,
        name,
      }) => (
        <IngredientItem
          key={id}
          quantity={quantity}
          unit={unit}
          name={name}
        />
      ))}
    </ul>
  </section>
);

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Ingredients;
