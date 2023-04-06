import type { NextPage } from 'next';
import Head from 'next/head';
import { TodoListContainer } from '@/modules/todos/application/todo-list/todo-list.container';

const Home: NextPage = function home () {
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

      <TodoListContainer />
    </>
  );
};

export default Home;
