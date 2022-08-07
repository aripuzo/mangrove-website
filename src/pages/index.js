import JoinWaitListPage from "../modules/JoinWaitListPage/JoinWaitListPage";
import Meta from "../components/Meta";
import { LANDING_PAGE } from '../utils/constants';
import LandingPage from '../modules/LandingPage/LandingPage';
import PageLayout from '../components/Layout';

const IndexPage = ({ landingPage }) => {
  console.log(landingPage === 'home');
  return landingPage === "home" ? (
    <PageLayout>
      <Meta/>
      <LandingPage />
    </PageLayout>
  ) : (
    <>
      <Meta title="Get Early Access | Mangrove" />
      <JoinWaitListPage />
    </>
  );
};

export const getServerSideProps = () => {
  const landingPage = LANDING_PAGE;
  return { props: { landingPage } };
};

export default IndexPage;
