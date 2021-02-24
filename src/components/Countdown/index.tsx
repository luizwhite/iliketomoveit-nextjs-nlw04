import { useCallback, useEffect, useMemo, useState } from 'react';
import { Container, CountdownButton } from './styles';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = useMemo(() => Math.floor(time / 60), [time]);
  const seconds = useMemo(() => time % 60, [time]);

  const [minuteLeft, minuteRight] = useMemo(
    () => String(minutes).padStart(2, '0').split(''),
    [minutes],
  );

  const [secondLeft, secondRight] = useMemo(
    () => String(seconds).padStart(2, '0').split(''),
    [seconds],
  );

  const startCountdown = useCallback(() => {
    setActive(true);
  }, []);

  useEffect(() => {
    if (active && time > 0)
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
  }, [active, time]);

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

      <CountdownButton type="button" onClick={startCountdown}>
        Iniciar um ciclo
      </CountdownButton>
    </div>
  );
};

export default Countdown;
