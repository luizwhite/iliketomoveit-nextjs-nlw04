import { useCallback, useEffect, useMemo, useState } from 'react';

import { useChallenges } from '../../hooks/challenges';
import { useCountdown } from '../../hooks/countdown';

import { Container, CountdownButton } from './styles';

import CheckCircle from '../../assets/check_circle.svg';
import AbortX from '../../assets/abort_x.svg';
import PlayArrow from '../../assets/play_arrow.svg';

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useCountdown();

  const { resetChallenge } = useChallenges();

  const [minuteLeft, minuteRight] = useMemo(
    () => String(minutes).padStart(2, '0').split(''),
    [minutes],
  );

  const [secondLeft, secondRight] = useMemo(
    () => String(seconds).padStart(2, '0').split(''),
    [seconds],
  );

  const handleStartCountdown = useCallback(() => {
    startCountdown();

    resetChallenge();
  }, [resetChallenge, startCountdown]);

  const handleAbortCountdown = useCallback(() => {
    resetCountdown();

    resetChallenge();
  }, [resetChallenge, resetCountdown]);

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <CountdownButton disabled>
          Ciclo encerrado
          <CheckCircle />
        </CountdownButton>
      ) : (
        <>
          {!isActive ? (
            <CountdownButton
              type="button"
              countdownStyle="start"
              onClick={handleStartCountdown}
            >
              Iniciar um ciclo
              <PlayArrow />
            </CountdownButton>
          ) : (
            <CountdownButton
              type="button"
              countdownStyle="stop"
              onClick={handleAbortCountdown}
            >
              Abandonar o ciclo
              <AbortX />
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
