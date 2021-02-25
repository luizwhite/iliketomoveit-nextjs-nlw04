import React, { useMemo } from 'react';
import { useChallenges } from '../../hooks/challenges';

import { Header, ProgressBar, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
  const { currentXP, xpToNextLevel } = useChallenges();

  const xpPercentual = useMemo(
    () => Math.floor((currentXP / xpToNextLevel) * 100),
    [currentXP, xpToNextLevel],
  );

  return (
    <Header>
      <span>0 xp</span>
      <div>
        <ProgressBar {...{ xpPercentual }} />
        <CurrentExperience {...{ xpPercentual }}>
          <span>{`${currentXP} xp`}</span>
        </CurrentExperience>
      </div>
      <span>{`${xpToNextLevel} xp`}</span>
    </Header>
  );
};

export default ExperienceBar;
