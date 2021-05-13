// == Import npm
import React from 'react';

// == Import
import Title from 'src/components/Title';
import Ingredients from 'src/components/Ingredients';
import Steps from 'src/components/Steps';

// import data of the recipe
import recipe from 'src/data/recipe';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Title
      title={recipe.title}
      author={recipe.author}
      difficulty={recipe.difficulty}
      thumbnail={recipe.thumbnail}
    />
    <Ingredients />
    <Steps />
  </div>
);

// == Export
export default App;
