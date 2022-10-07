import { NextPage } from "next";
import Head from "next/head";

import Content from "../components/molecules/content/content";
import Header from "../components/organisms/header/header";
import ErrorContent from "../components/templates/errorContent/errorContent";

interface ErrorProps {
	statusCode: number;
}

/* eslint-disable react-hooks/exhaustive-deps */
const Error: NextPage<ErrorProps> = (props: ErrorProps) => {
	return (
		<main>
			<Head>
				<title>Three Brothers Burgers</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<ErrorContent />
		</main>
	);
};

export default Error;
