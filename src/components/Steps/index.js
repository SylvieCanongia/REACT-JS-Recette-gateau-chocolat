import React from 'react';

import './steps.scss';

const Steps = () => (
  <section className="steps">
    <ol className="steps__list">
      <li className="steps__list__item">Préchauffer le four à 180°C.</li>
      <li className="steps__list__item">Faire fondre le chocolat et le beurre au bain marie.</li>
      <li className="steps__list__item">Dans un saladier, battre les œufs avec le sucre jusqu\'à ce que le mélange mousse et blanchisse.</li>
      <li className="steps__list__item">Rajouter le beurre fondu tout en mélangeant.</li>
      <li className="steps__list__item">Incorporer le mélange chocolat/beurre puis la farine.</li>
      <li className="steps__list__item">Une fois la pâte homogène, la verser dans un moule beurré et fariné de 24/25 cm de diamètre.</li>
    </ol>
  </section>
);

export default Steps;
