import HeroSection from '../components/layout/HeroSection';
import ComparisonSection from '../components/layout/ComparisonSection';
import CoursesSection from '../components/layout/CoursesSection';
import PricingSection from '../components/layout/PricingSection';
import WhyRocket from '../components/layout/WhyRocket';
import PremiumOffer from '../components/layout/PremiumOffer';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <WhyRocket />
      <PremiumOffer />
      <CoursesSection />
      {/* <ComparisonSection /> */}
      {/* <PricingSection /> */}
    </div>
  );
};
export default Home;