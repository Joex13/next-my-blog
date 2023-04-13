import { GetServerSideProps } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { useEffect } from 'react';

const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

type Props = {
  weather: {
    description: {
      text: string;
    };
  };
};

const Index = ({ weather }: Props) => {
  useEffect(() => {
    console.log(weather);
  }, []);

  return (
    <>
      <h1 className={`${notoSansJp.className} text-red-500 font-bold`}>
        ルート
      </h1>
      <h2>{weather.description.text}</h2>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log('getServerSidePropsFn called');
  const resWeather = await fetch(
    'https://weather.tsukumijima.net/api/forecast/city/400040'
  );
  const weather = await resWeather.json();
  return {
    props: {
      weather,
    },
  };
};

export default Index;
