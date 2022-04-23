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
      <title>Mangrove</title>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Mangrove" />

      <meta name="title" content={title} />
      <meta name="author" content="Antonio Okoro" />
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
      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: "Mangrove",
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  image: process.env.NEXT_PUBLIC_IMAGE,
  keywords: process.env.NEXT_PUBLIC_KEYWORDS,
  title: process.env.NEXT_PUBLIC_TITLE,
  ogDescription: process.env.NEXT_PUBLIC_OGDESCRIPTION,
  ogImage: process.env.NEXT_PUBLIC_OGIMAGE,
  ogTitle: process.env.NEXT_PUBLIC_OGTITLE,
  ogType: process.env.NEXT_PUBLIC_OGTYPE,
  ogUrl: process.env.NEXT_PUBLIC_OGURL,
  twitterTitle: process.env.NEXT_PUBLIC_TWITTERTITLE,
  twitterDescription: process.env.NEXT_PUBLIC_TWITTERDESCRIPTION,
  twitterImage: process.env.NEXT_PUBLIC_TWITTERIMAGE,
}
export default Meta;