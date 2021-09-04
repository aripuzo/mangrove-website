import PageLayout from "../components/Layout";
import AboutUsPage from "../modules/AboutUsPage/AboutUsPage";
import Head from "next/head";

const AboutUs = () => (
  <>
    <Head>
      <title>About Us | Mangrove</title>
    </Head>
    <PageLayout whiteNav>
      <AboutUsPage />
    </PageLayout>
  </>
);

export default AboutUs;
