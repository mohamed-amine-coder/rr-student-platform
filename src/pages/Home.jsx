import HeroSection from '../components/layout/HeroSection';
import ComparisonSection from '../components/layout/ComparisonSection';
import CoursesSection from '../components/layout/CoursesSection';
import PricingSection from '../components/layout/PricingSection';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <CoursesSection />
      <ComparisonSection />
      <PricingSection />
    </div>
  );
};
export default Home;