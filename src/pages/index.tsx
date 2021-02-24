import Head from 'next/head';

import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

import Container from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Início | il.to.move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div />
      </section>
    </Container>
  );
};

export default Home;
