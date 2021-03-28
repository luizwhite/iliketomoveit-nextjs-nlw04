import { signOut } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import ThemeToggler from '../ThemeToggler';
import { Container } from './styles';

import PowerIcon from '../../assets/power.svg';

interface ControlsProps {
  theme: string | null;
  toggleTheme: () => void;
}

const Controls: React.FC<ControlsProps> = ({ theme, toggleTheme }) => {
  const router = useRouter();

  const handleClick = useCallback(async () => {
    const data = await signOut({
      redirect: false,
      callbackUrl: `/login`,
    });

    router.push(data.url);
  }, [router]);

  return (
    <Container>
      <ThemeToggler {...{ theme, toggleTheme }} />
      <button type="button" onClick={handleClick}>
        <PowerIcon viewBox="0 0 24 24" />
      </button>
    </Container>
  );
};

export default Controls;
