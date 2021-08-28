import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { LightModeSwitch } from '../components/LightModeSwitch'
import Head from 'next/head'
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Platform-Regular.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Proxima-Nova.otf"
          as="font"
          crossOrigin=""
        />
        <link rel="stylesheet" href="/styles/global.css" />
        <link rel="icon" href="/icon.png" />
        <title>Mangrove</title>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="SwapBase" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <LightModeSwitch />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
