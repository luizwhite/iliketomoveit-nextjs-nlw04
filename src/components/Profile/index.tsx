import { useChallenges } from '../../hooks/challenges';
import Container from './styles';

const Profile: React.FC = () => {
  const { level } = useChallenges();

  return (
    <Container>
      <img src="https://github.com/luizwhite.png" alt="Luiz Augusto" />

      <div>
        <strong>Luiz Augusto</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          {`Level ${level}`}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
