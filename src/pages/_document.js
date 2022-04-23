import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />

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
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-6E7GW6TV4Z"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-6E7GW6TV4Z');
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
        </body>
      </Html>
    );
  }
}
