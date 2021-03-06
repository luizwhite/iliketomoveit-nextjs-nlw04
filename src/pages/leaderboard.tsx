import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getSession, Session } from 'next-auth/client';

import SideBar from '../components/SideBar';

import { Container, ProfileInfoContainer } from '../styles/leaderboard';

interface User {
  username: string;
  name: string;
  level: number;
  currentXP: number;
  challengesCompleted: number;
  image: string;
}

interface LeaderboardProps {
  session: Session;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ session }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [showPage, setShowPage] = useState(false);

  const router = useRouter();

  const handleHomeClick = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleLeaderboardClick = useCallback(() => {
    router.push('/leaderboard');
  }, [router]);

  useEffect(() => {
    if (!session) router.push('/login');
    else {
      setShowPage(true);

      const getUsers = async () => {
        const { data: usersData } = await axios.get<User[]>(
          '/api/challenges?users=all',
        );
        if (usersData) setUsers(usersData);
      };

      getUsers();
    }
  }, [router, session]);

  useEffect(() => {
    if (users.length) setLoading(false);
  }, [users]);

  return (
    <>
      <Head>
        <title>Leaderboard | il.to.move.it</title>
      </Head>
      <SideBar
        handleHomeClick={handleHomeClick}
        handleLeaderboardClick={handleLeaderboardClick}
      />
      {showPage && (
        <Container>
          <table>
            <caption>Leaderboard</caption>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Usuário</th>
                <th>Desafios</th>
                <th>Experiência</th>
              </tr>
            </thead>
            <tbody>
              {!loading ? (
                users.map(
                  (
                    {
                      name,
                      username,
                      challengesCompleted,
                      currentXP,
                      image,
                      level,
                    },
                    index,
                  ) => (
                    <tr key={username}>
                      <td>{index + 1}</td>
                      <td>
                        <ProfileInfoContainer>
                          <img src={image} alt={name} />
                          <div>
                            <strong>{name}</strong>
                            <div>
                              <img src="icons/level.svg" alt="Level" />
                              {`Level ${level}`}
                            </div>
                          </div>
                        </ProfileInfoContainer>
                      </td>
                      <td>
                        <strong>{challengesCompleted}</strong> completados
                      </td>
                      <td>
                        <strong>{currentXP}</strong> xp
                      </td>
                    </tr>
                  ),
                )
              ) : (
                <tr key="key">
                  <td />
                  <td>
                    <ProfileInfoContainer>
                      <div>
                        <strong />
                        <div />
                      </div>
                    </ProfileInfoContainer>
                  </td>
                  <td />
                  <td />
                </tr>
              )}
              {[...Array(7 - users.length)].map((_value, index) => (
                <tr key={`dumb_${index + 1}`}>
                  <td />
                  <td>
                    <ProfileInfoContainer>
                      <div>
                        <strong />
                        <div />
                      </div>
                    </ProfileInfoContainer>
                  </td>
                  <td />
                  <td />
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      )}
    </>
  );
};

export default Leaderboard;

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
