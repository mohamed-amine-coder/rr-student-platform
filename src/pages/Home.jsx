import HeroSection from '../components/layout/HeroSection';
import ComparisonSection from '../components/layout/ComparisonSection';
import CoursesSection from '../components/layout/CoursesSection';
import PricingSection from '../components/layout/PricingSection';
import WhyRocket from '../components/layout/WhyRocket';
import PremiumOffer from '../components/layout/PremiumOffer';
import SummarizerTool from '../components/ui/SummarizerTool'

const Home = () => (
  <div className="w-full">
    <HeroSection />
    <PricingSection />
    <CoursesSection />
    <WhyRocket />
    <PremiumOffer />
    {/* <ComparisonSection /> */}
    {/* <SummarizerTool /> */}
  </div>
);
export default Home;