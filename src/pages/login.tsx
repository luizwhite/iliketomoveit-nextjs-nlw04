import { useCallback, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { getSession, signIn, Session } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';

import Input from '../components/LoginInput';

import LogoFull from '../assets/logo_full_02.svg';
import IconGitHub from '../assets/github_icon.svg';

import { Container, Content, LoginWithGithubContainer } from '../styles/login';

interface HomeProps {
  session: Session;
}

const Login: React.FC<HomeProps> = ({ session }) => {
  const router = useRouter();

  const handleLogin = useCallback(
    (value: string) => {
      if (!session)
        signIn(
          'github',
          { callbackUrl: `${process.env.NEXTAUTH_URL}` },
          { login: value },
        );
      else router.push('/');
    },
    [router, session],
  );

  useEffect(() => {
    if (session) router.push('/');
  }, [router, session]);

  return (
    <Container>
      <Head>
        <title>Login | il.to.move.it</title>
      </Head>
      <Content>
        <LogoFull />

        <h1>Bem-vindo</h1>
        <LoginWithGithubContainer>
          <button type="button">
            <IconGitHub />
          </button>
          <span>Faça login com seu GitHub para começar</span>
        </LoginWithGithubContainer>

        <Input handleLogin={handleLogin} />
      </Content>
    </Container>
  );
};

export default Login;

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
