import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { LightModeSwitch } from "../components/LightModeSwitch";
import Head from "next/head";
import theme from "../theme";

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

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Mangrove" />

        {/* SEO Stuff */}
        <title>Mangrove</title>

        <meta itemProp="name" name="title" content="Mangrove" />
        <meta
          itemProp="description"
          name="description"
          content="Get Money for your value, Get Value for your money"
        />
        <meta
          name="keywords"
          content="shelter, contract, escrow, job, freelance, client, service, software, app"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <meta name="language" content="English" />
        <meta itemProp="image" name="image" content="/icon.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://mangrove.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mangrove" />
        <meta
          property="og:description"
          content="Get Money for your value, Get Value for your money"
        />
        <meta property="og:image" content="/icon.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mangrove" />
        <meta
          name="twitter:description"
          content="Get Money for your value, Get Value for your money"
        />
        <meta name="twitter:image" content="/icon.png" />
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
  );
}

export default MyApp;
