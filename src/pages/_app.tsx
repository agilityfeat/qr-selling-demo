import '../styles/globals.css';
import type { AppProps } from 'next/app';

const MyApp = function app ({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};
export default MyApp;
