import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axios from 'axios';
// import Cookies from 'js-cookie';

import ModalLevelUp from '../components/ModalLevelUp';

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

interface ChallengesProviderProps {
  username: string;
  level: number;
  currentXP: number;
  challengesCompleted: number;
  children: ReactNode;
}

const ChallengesContext = createContext({} as ChallengesContextData);

const ChallengesProvider: React.FC<ChallengesProviderProps> = ({
  children,
  ...data
}) => {
  const [twitterURL, setTwitterURL] = useState('');
  const [level, setLevel] = useState(data.level);
  const [currentXP, setCurrentXP] = useState(data.currentXP);
  const [challengesCompleted, setChallengesCompleted] = useState(
    data.challengesCompleted,
  );
  const [challengeReady, setChallengeReady] = useState(false);
  const [isLeveledUp, setIsLeveledUp] = useState(false);
  const [
    activeChallengeData,
    setActiveChallengeData,
  ] = useState<Challenge | null>(null);

  const xpToNextLevel = useMemo(() => ((level + 1) * 4) ** 2, [level]);

  const levelUp = useCallback(() => {
    setLevel((state) => state + 1);

    setIsLeveledUp(true);
  }, []);

  const closeLevelUpModal = useCallback(() => {
    setIsLeveledUp(false);
  }, []);

  const setupNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex] as Challenge;

    setActiveChallengeData(challenge);
    setChallengeReady(true);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted')
      // eslint-disable-next-line no-new
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

  const getThumbURIEncoded = useCallback(async () => {
    const { data: thumbURIEncoded } = await axios.get<string>(
      `/api/thumbnail?share_to_twitter_URI=true&level=${level}&challengesCompleted=${challengesCompleted}&currentXP=${currentXP}`,
    );

    setTwitterURL(`https://twitter.com/intent/tweet?url=${thumbURIEncoded}`);
  }, [challengesCompleted, currentXP, level]);

  // const shareToTwitter = useCallback(async () => {
  //   const { data: thumbURIEncoded } = await axios.get<string>(
  //     `/api/thumbnail?share_to_twitter_URI=true&level=${level}&challengesCompleted=${challengesCompleted}&currentXP=${currentXP}`,
  //   );

  //   router.push(`https://twitter.com/intent/tweet?url=${thumbURIEncoded}`);
  // }, [challengesCompleted, currentXP, level, router]);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    getThumbURIEncoded();
  }, [getThumbURIEncoded]);

  useEffect(() => {
    /**
     * Cookies.set('level', String(level));
     * Cookies.set('currentXP', String(currentXP));
     * Cookies.set('challengesCompleted', String(challengesCompleted));
     */

    const updateData = async () => {
      const { username } = data;

      try {
        await axios.post('/api/challenges', {
          username,
          level,
          currentXP,
          challengesCompleted,
        });
      } catch (err) {
        console.error(err);
      }
    };
    updateData();
  }, [level, currentXP, challengesCompleted, data]);

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
      <ModalLevelUp
        level={level}
        modalIsOpen={isLeveledUp}
        closeModal={closeLevelUpModal}
        shareToTwitterURL={twitterURL}
      />
    </ChallengesContext.Provider>
  );
};

function useChallenges(): ChallengesContextData {
  const context = useContext(ChallengesContext);

  return context;
}

export { ChallengesProvider, useChallenges };
