import Head from 'next/head';
import { NextPage } from 'next';

import Content from '../../components/atoms/block/block';
import Header from '../../components/organisms/header/header';

const Bookings: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Three Brothers Burgers | About</title>
        <meta
          name="description"
          content="Three Brothers Burgers is fast becoming one of the best Burger destinations in Bristol - based on the Bristol harbourside we're open 7 days a week."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Content fixed alignItems="flex-start" justifyContent="center" background="/images/restaurant/exterior_2.jpeg">
        <iframe
          src="https://booking.resdiary.com/widget/ThreeMonth/ThreeBrothersBurgers/12073"
          id="rd-widget-frame"
          style={{ height: `100%` }}
        />
      </Content>
    </main>
  );
};

export default Bookings;
