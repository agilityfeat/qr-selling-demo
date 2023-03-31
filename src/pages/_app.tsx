import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

const MyApp = function app({ Component, pageProps }: AppProps) {
  return (
        <Component {...pageProps} />
  );
};
export default MyApp;