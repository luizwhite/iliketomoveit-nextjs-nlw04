import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useChallenges } from './challenges';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

let countdownTimeout: NodeJS.Timeout;

const CountdownContext = createContext({} as CountdownContextData);

const CountdownProvider: React.FC = ({ children }) => {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const { setupNewChallenge } = useChallenges();

  const minutes = useMemo(() => Math.floor(time / 60), [time]);
  const seconds = useMemo(() => time % 60, [time]);

  const startCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);

    setHasFinished(false);
  }, []);

  useEffect(() => {
    if (isActive && time > 0)
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    else if (isActive && time === 0) {
      setHasFinished(true);

      setupNewChallenge();
      setIsActive(false);
    }
  }, [isActive, setupNewChallenge, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};

function useCountdown(): CountdownContextData {
  const context = useContext(CountdownContext);

  return context;
}

export { CountdownProvider, useCountdown };
