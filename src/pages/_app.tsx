import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans_JP } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${notoSansJp.style.fontFamily};
          }
        `}
      </style>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
