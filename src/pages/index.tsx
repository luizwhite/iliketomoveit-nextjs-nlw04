import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ReactNode } from 'react';
import { ChallengesProvider } from '../hooks/challenges';

import ChallengeBox from '../components/ChallengeBox';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import { CountdownProvider } from '../hooks/countdown';

import Container from './styles';

interface HomeProps {
  level: number;
  currentXP: number;
  challengesCompleted: number;
  children?: ReactNode;
}

const Home: React.FC<HomeProps> = ({
  level,
  currentXP,
  challengesCompleted,
}) => {
  return (
    <ChallengesProvider {...{ level, currentXP, challengesCompleted }}>
      <Container>
        <Head>
          <title>Início | il.to.move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  );
};

export default Home;

// executa no servidor node
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentXP, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentXP: Number(currentXP),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
