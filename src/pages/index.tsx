import { ReactNode, useCallback, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { getSession, Session, useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';

import { ChallengesProvider } from '../hooks/challenges';
import { CountdownProvider } from '../hooks/countdown';

import ChallengeBox from '../components/ChallengeBox';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import SideBar from '../components/SideBar';

import Container from '../styles/home';

interface User {
  level: number;
  currentXP: number;
  challengesCompleted: number;
}

interface HomeProps {
  session: Session & {
    user: {
      username: 'string';
      level: number;
      currentXP: number;
      challengesCompleted: number;
    };
  };
  children?: ReactNode;
}

const Home: React.FC<HomeProps> = ({ session }) => {
  const [showPage, setShowPage] = useState(false);
  const [user, setUser] = useState<User>({} as User);
  const [, loading] = useSession();

  const router = useRouter();

  const handleHomeClick = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleLeaderboardClick = useCallback(() => {
    router.push('/leaderboard');
  }, [router]);

  useEffect(() => {
    if (!session && !loading) router.push('/login');
    else if (session) {
      const getUsers = async () => {
        const { data: userData } = await axios.get<User>(
          `/api/challenges?users=${session.user.username}`,
        );
        const { level, currentXP, challengesCompleted } = userData;

        setUser({
          level,
          currentXP,
          challengesCompleted,
        });
      };

      getUsers();
    }
  }, [loading, router, session]);

  useEffect(() => {
    if (Object.keys(user).length === 3) setShowPage(true);
  }, [user]);

  return (
    <>
      <Head>
        <title>Início | il.to.move.it</title>
      </Head>
      <SideBar
        $isHome
        handleHomeClick={handleHomeClick}
        handleLeaderboardClick={handleLeaderboardClick}
      />
      <div style={{ marginLeft: '90px' }}>
        <Container>
          {!session || !showPage ? (
            <div />
          ) : (
            <ChallengesProvider
              username={session?.user.username}
              level={user.level}
              currentXP={user.currentXP}
              challengesCompleted={user.challengesCompleted}
            >
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
            </ChallengesProvider>
          )}
        </Container>
      </div>
    </>
  );
};

export default Home;

/**
 * @param {GetServerSidePropsContext} ctx - Server Side Context
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  return {
    props: {
      session,
    },
  };
};
