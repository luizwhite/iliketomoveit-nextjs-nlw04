import Container from './styles';

const Profile: React.FC = () => (
  <Container>
    <img src="https://github.com/luizwhite.png" alt="Luiz Augusto" />

    <div>
      <strong>Luiz Augusto</strong>
      <p>
        <img src="icons/level.svg" alt="Level" />
        Level 1
      </p>
    </div>
  </Container>
);

export default Profile;
