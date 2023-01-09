/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import type { NextPage } from 'next';

import Content from '../components/atoms/block/block';
import Footer from '../components/organisms/footer/footer';
import Header from '../components/organisms/header/header';

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Three Brothers Burgers</title>
        <meta
          name="description"
          content="Three Brothers Burgers is fast becoming one of the best Burger destinations in Bristol - based on the Bristol harbourside we're open 7 days a week."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Content fixed backgroundImage="/images/restaurant/exterior_2.jpeg" />
      <Content fixed backgroundImage="/images/restaurant/exterior_2.jpeg" />
      <Content fixed backgroundImage="/images/restaurant/exterior_2.jpeg" />
      <Footer />
    </main>
  );
};

export default Home;
