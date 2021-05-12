// == Import npm
import React from 'react';

// == Import
import Title from 'src/components/Title';
import Ingredients from 'src/components/Ingredients';
import Steps from 'src/components/Steps';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Title />
    <Ingredients />
    <Steps />
  </div>
);

// == Export
export default App;
