/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import type { NextPage } from "next";

import Content from "../../components/molecules/content/content";
import Header from "../../components/organisms/header/header";
import AboutContent from "../../components/templates/aboutContent/aboutContent";

const About: NextPage = () => {
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
			<Content
				fixed
				alignItems="flex-start"
				justifyContent="center"
				background="/images/restaurant/exterior_2.jpeg"
			>
				<AboutContent />
			</Content>
		</main>
	);
};

export default About;
