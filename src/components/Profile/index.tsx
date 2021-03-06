import { useSession } from 'next-auth/client';

import { useChallenges } from '../../hooks/challenges';
import Container from './styles';

const Profile: React.FC = () => {
  const { level } = useChallenges();
  const [session] = useSession();

  return (
    <Container>
      {session?.user.image && (
        <img src={session.user.image} alt="Luiz Augusto" />
      )}

      <div>
        <strong>{session?.user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          {`Level ${level}`}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
