import React, { useState } from 'react';

import { Header, ProgressBar, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
  const [xp, setXp] = useState(60);

  return (
    <Header>
      <span>0 xp</span>
      <div>
        <ProgressBar {...{ xp }} />
        <CurrentExperience {...{ xp }}>
          <span>300 xp</span>
        </CurrentExperience>
      </div>
      <span>600 xp</span>
    </Header>
  );
};

export default ExperienceBar;
