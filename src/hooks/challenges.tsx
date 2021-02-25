import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentXP: number;
  xpToNextLevel: number;
  challengesCompleted: number;
  activeChallengeData: Challenge | null;
  challengeReady: boolean;
  levelUp: () => void;
  setupNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

const ChallengesContext = createContext({} as ChallengesContextData);

const ChallengesProvider: React.FC = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [currentXP, setCurrentXP] = useState(8);
  const [challengeReady, setChallengeReady] = useState(false);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [
    activeChallengeData,
    setActiveChallengeData,
  ] = useState<Challenge | null>(null);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const xpToNextLevel = useMemo(() => ((level + 1) * 4) ** 2, [level]);

  const levelUp = useCallback(() => {
    setLevel(level + 1);
  }, [level]);

  const setupNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex] as Challenge;

    setActiveChallengeData(challenge);
    setChallengeReady(true);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted')
      new Notification('Novo desafio 🎉', {
        body: `valendo ${challenge.amount}xp`,
      });
  }, []);

  const resetChallenge = useCallback(() => {
    setChallengeReady(false);
    setActiveChallengeData(null);
  }, []);

  const completeChallenge = useCallback(() => {
    if (!activeChallengeData) return;

    const { amount } = activeChallengeData;
    let finalXP = currentXP + amount;

    if (finalXP >= xpToNextLevel) {
      finalXP -= xpToNextLevel;
      levelUp();
    }

    setCurrentXP(finalXP);
    setActiveChallengeData(null);
    setChallengesCompleted(challengesCompleted + 1);
  }, [
    activeChallengeData,
    challengesCompleted,
    currentXP,
    levelUp,
    xpToNextLevel,
  ]);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentXP,
        xpToNextLevel,
        challengeReady,
        challengesCompleted,
        setupNewChallenge,
        resetChallenge,
        activeChallengeData,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

function useChallenges(): ChallengesContextData {
  const context = useContext(ChallengesContext);

  return context;
}

export { ChallengesProvider, useChallenges };
