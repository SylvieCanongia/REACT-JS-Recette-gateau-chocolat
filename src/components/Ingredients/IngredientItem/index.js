import React from 'react';
import PropTypes from 'prop-types';
import './ingredientItem.scss';

const IngredientItem = ({
  quantity,
  unit,
  name,
}) => (
  <>
    <li className="ingredientItem">
      <span>{quantity}{unit}</span>{name}
    </li>
  </>
);

IngredientItem.propTypes = {
  quantity: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default IngredientItem;
