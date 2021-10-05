import Layout from "../components/Layout";
import SplitScreen from "../components/chak_templates/SplitScreen";
import Feature from "../components/chak_templates/Feature";
import TestmonialCard from "../components/chak_templates/TestmonialCard";
import Footer from "../components/chak_templates/Footer";
import Pricing from "../components/chak_templates/Pricing";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <SplitScreen />
    <Feature />
    <TestmonialCard />
    <Pricing />
    <Footer />
  </Layout>
);

export default IndexPage;
