import PageLayout from "../components/Layout";
import AboutUsPage from "../modules/AboutUsPage/AboutUsPage";
import Meta from '../components/Meta';

const AboutUs = () => (
  <>
    <Meta title="About Us | Mangrove" />
    <PageLayout whiteNav>
      <AboutUsPage />
    </PageLayout>
  </>
);

export default AboutUs;
