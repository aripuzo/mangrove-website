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
      <style jsx global>{`
        *:focus {
          box-shadow: none !important;
        }

        body {
          scroll-behavior: smooth;
        }
        .container-body::-webkit-scrollbar {
          width: 5px;
          height: 6px;
        }
        .container-body::-moz-scrollbar {
          width: 5px;
          height: 6px;
        }
        /* Track */
        .container-body::-webkit-scrollbar-track {
          background: ${theme.colors.gray[100]};
        }

        /* Handle */
        .container-body::-webkit-scrollbar-thumb {
          background: ${theme.colors.gray[300]};
          border-radius: 5px;
        }

        /* Handle on hover */
        .container-body::-webkit-scrollbar-thumb:hover {
          background: ${theme.colors.gray[400]};
        }
      `}</style>
    </>
  )
}

export default MyApp
