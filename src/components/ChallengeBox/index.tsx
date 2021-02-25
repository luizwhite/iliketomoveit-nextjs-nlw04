import { useCallback } from 'react';
import { useChallenges } from '../../hooks/challenges';
import { useCountdown } from '../../hooks/countdown';

import {
  Container,
  ChallengeNotActiveContainer,
  ChallengeActiveContainer,
  FailedButton,
  SucceededButton,
} from './styles';

const ChallengeBox: React.FC = () => {
  const {
    activeChallengeData,
    challengeReady,
    resetChallenge,
    completeChallenge,
  } = useChallenges();

  const { isActive: isActiveCountdown, resetCountdown } = useCountdown();

  const handleChallengeSucceeded = useCallback(() => {
    completeChallenge();

    resetCountdown();
  }, [completeChallenge, resetCountdown]);

  const handleChallengeFailed = useCallback(() => {
    resetCountdown();

    resetChallenge();
  }, [resetChallenge, resetCountdown]);

  return (
    <Container>
      {challengeReady && activeChallengeData ? (
        <ChallengeActiveContainer>
          <header>Ganhe {activeChallengeData.amount} xp</header>

          <main>
            <img src={`icons/${activeChallengeData.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallengeData.description}</p>
          </main>

          <footer>
            <FailedButton type="button" onClick={handleChallengeFailed}>
              Falhei
            </FailedButton>
            <SucceededButton type="button" onClick={handleChallengeSucceeded}>
              Completei
            </SucceededButton>
          </footer>
        </ChallengeActiveContainer>
      ) : (
        <>
          {isActiveCountdown ? (
            <ChallengeNotActiveContainer>
              <strong>Atente-se ao tempo restante para o novo desafio</strong>
              <p>
                <img src="icons/level-up.svg" alt="Level Up" />
                <span>
                  Caso complete o desafio, ganhará experiência para avançar de
                  level.
                </span>
              </p>
            </ChallengeNotActiveContainer>
          ) : (
            <ChallengeNotActiveContainer>
              <strong>
                Inicie um ciclo para receber desafios ao final da contagem
                regressiva
              </strong>
              <p>
                <img src="icons/level-up.svg" alt="Level Up" />
                <span>
                  Avance de level ganhando experiência completando estes
                  desafios.
                </span>
              </p>
            </ChallengeNotActiveContainer>
          )}
        </>
      )}
    </Container>
  );
};

export default ChallengeBox;
