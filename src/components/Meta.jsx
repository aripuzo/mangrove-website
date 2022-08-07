import Head from "next/head";

const Meta = ({
  description,
  image,
  keywords,
  title,
  ogDescription,
  ogImage,
  ogTitle,
  ogType,
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="icon" href="/favicon.ico" />

      {/* SEO Stuff */}
      <title>{title}</title>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Mangrove" />

      <meta name="title" content={title} />
      <meta name="author" content="Mangrove" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="image" content={image} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
    </Head>
  );
};
Meta.defaultProps = {
  title: process.env.NEXT_PUBLIC_TITLE,
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  image: process.env.NEXT_PUBLIC_IMAGE,
  keywords: process.env.NEXT_PUBLIC_KEYWORDS,
  ogDescription: process.env.NEXT_PUBLIC_OG_DESCRIPTION,
  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE,
  ogTitle: process.env.NEXT_PUBLIC_OG_TITLE,
  ogType: process.env.NEXT_PUBLIC_OG_TYPE,
  ogUrl: process.env.NEXT_PUBLIC_OG_URL,
  twitterTitle: process.env.NEXT_PUBLIC_TWITTER_TITLE,
  twitterDescription: process.env.NEXT_PUBLIC_TWITTER_DESCRIPTION,
  twitterImage: process.env.NEXT_PUBLIC_TWITTER_IMAGE,
}
export default Meta;