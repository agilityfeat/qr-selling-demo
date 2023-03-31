import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { AuthContainer } from '@/modules/auth/application/auth.container';
import { LoginFormContainer } from '@/modules/auth/application/login-form/login-form.container';

const Home: NextPage<{ user: { authenticated: boolean } }> = function home ({ user }) {
  user = {authenticated: false};
  return (
    <>
      <Head>
        <title>{process.env.title || "WebRTC.ventures frontend example"}</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="WebRTC.ventures frontend example"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {user.authenticated ? (
        <>
        <p>User is authenticated</p>
        </>
      ) : (
        <>
        <AuthContainer>
          <LoginFormContainer />
        </AuthContainer>
        </>
      )}
    </>
  );
};

export default Home;
