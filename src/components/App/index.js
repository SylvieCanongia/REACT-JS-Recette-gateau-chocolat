// == Import npm
import React from 'react';

// == Import
import Title from 'src/components/Title';
import Ingredients from 'src/components/Ingredients';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Title />
    <Ingredients />
    <div>Steps</div>
  </div>
);

// == Export
export default App;
