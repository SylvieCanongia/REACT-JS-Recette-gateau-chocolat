// == Import npm
import React from 'react';

// == Import
import Title from 'src/components/Title';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Title />
    <div>Ingrédients</div>
    <div>Steps</div>
  </div>
);

// == Export
export default App;
