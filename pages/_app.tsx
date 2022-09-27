import type { AppProps } from "next/app";
import { StoreProvider } from "../components/organisms/storeProvider/storeProvider";

import "../styles/font/stylesheet.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<StoreProvider {...pageProps}>
			<Component {...pageProps} />
		</StoreProvider>
	);
}

export default MyApp;
