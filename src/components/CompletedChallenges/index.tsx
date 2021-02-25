import { useChallenges } from '../../hooks/challenges';
import Container from './styles';

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useChallenges();

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
};

export default CompletedChallenges;
