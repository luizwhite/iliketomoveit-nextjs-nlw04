import { Container, TogglerContainer, Circle, Stroke } from './styles';

interface ToggleProps {
  theme: string | null;
  toggleTheme: () => void;
}

const ThemeToggler: React.FC<ToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <Container onClick={toggleTheme} theme-name={theme}>
      <TogglerContainer>
        <Circle />
        <Stroke />
      </TogglerContainer>
    </Container>
  );
};

export default ThemeToggler;
