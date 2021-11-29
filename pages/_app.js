import '../styles/globals.scss'
import Head from 'next/head'
import LazyLoad from 'react-lazyload';

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

			<meta name="google-site-verification" content="cf55v97BKYEcI4iAtkFZQDIrFJQuJsU17hODsXu1Cm0" />
		</Head>
		<LazyLoad height={200} >
			<Component {...pageProps} />
		</LazyLoad>
	</>
	)
}

export default MyApp