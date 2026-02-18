import HeroSection from '../components/layout/HeroSection';
import ComparisonSection from '../components/layout/ComparisonSection';
import CoursesSection from '../components/layout/CoursesSection';
import PricingSection from '../components/layout/PricingSection';
import WhyRocket from '../components/layout/WhyRocket';
import PremiumOffer from '../components/layout/PremiumOffer';
import LessonImageGenerator from '../components/ui/LessonImageGenerator';
import InstaBioDevGenerator from '../components/ui/BioDevPreneurCard'
import SummarizerTool from '../components/ui/SummarizerTool'

const Home = () => (
  <div className="w-full">
    <HeroSection />
    <WhyRocket />
    <PremiumOffer />
    <CoursesSection />
    <ComparisonSection />
    {/* <LessonImageGenerator /> */}
    {/* <SummarizerTool /> */}
    {/* <InstaBioDevGenerator /> */}
    {/* <PricingSection /> */}
  </div>
);
export default Home;