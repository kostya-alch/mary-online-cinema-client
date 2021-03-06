import type { AppProps } from 'next/app';
import { MainProvider } from 'provider/MainProvider';
import { useEffect, useState } from 'react';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	);
}

export default MyApp;
