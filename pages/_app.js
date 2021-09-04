import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (<>
		<Head>
			<title>Felipe Tuffani</title>
			<meta name="description" content="Hey, checkout my personal webpage and find out what I've been into!" />
			<meta name="url" content="https://fetuffani.github.io" />

			<meta property="og:title" content="Felipe Tuffani" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://fetuffani.github.io" />
			<meta property="og:image" content="https://fetuffani.github.io/avatar.png" />
			<meta property="og:description" content="Hey, checkout my personal webpage and find out what I've been into!" />
		</Head>
		<Component {...pageProps} />
	</>
	)
}

export default MyApp