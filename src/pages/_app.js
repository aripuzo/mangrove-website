import React, { useEffect } from "react";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { LightModeSwitch } from "../components/LightModeSwitch";
import Head from "next/head";
import theme from "../theme";
import { initGA, logPageView } from "../utils/googleAnalytics";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

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

        {/* Global site tag (gtag.js) - Google Analytics  */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6E7GW6TV4Z"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="GfVjWKLDnzDUZpcyaKVv1xcqDEvugu1D";analytics.SNIPPET_VERSION="4.13.2";
            analytics.load("GfVjWKLDnzDUZpcyaKVv1xcqDEvugu1D");
            analytics.page();
            }}();
            `,
          }}
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/61433f21d326717cb681cc2f/1ffnat6q5';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
            `,
          }}
        ></script>
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
