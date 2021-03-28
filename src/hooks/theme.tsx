import { useCallback, useEffect, useState } from 'react';

type ThemeParams = [
  theme: string | null,
  toggleTheme: () => void,
  mountedComponent: boolean,
];

export const useTheme = (): ThemeParams => {
  const [mountedComponent, setMountedComponent] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const localTheme = window.localStorage.getItem('@iliketomoveit:theme');

      return localTheme || 'light';
    }

    return null;
  });

  const toggleTheme = useCallback(
    () => (theme === 'light' ? setTheme('dark') : setTheme('light')),
    [theme],
  );

  useEffect(() => {
    if (theme) window.localStorage.setItem('@iliketomoveit:theme', theme);
    setMountedComponent(true);
  }, [setMountedComponent, theme]);

  return [theme, toggleTheme, mountedComponent];
};
