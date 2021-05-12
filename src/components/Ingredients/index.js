import React from 'react';

import IngredientItem from 'src/components/Ingredients/IngredientItem';
import './ingredients.scss';

const Ingredients = () => (
  <main className="ingredients">
    <ul className="ingredients__list">
      <IngredientItem />
      <IngredientItem />
      <IngredientItem />
      <IngredientItem />
      <IngredientItem />
    </ul>
  </main>
);

export default Ingredients;
