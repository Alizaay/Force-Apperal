import MainLayout from "../../layouts/MainLayout";

import HeroSection from "../../components/home/HeroSection";
import CollectionSection from "../../components/home/CollectionsSection";
import SolutionsSection from "../../components/home/SolutionsSection";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import CTASection from "../../components/home/CTASection";

// images
import heroImage from "../../assets/images/heroImage.png";
// images

const Home = () => {
  return (
    <MainLayout>

      <HeroSection heroImage={heroImage} />

      <CollectionSection />

      <SolutionsSection />

      <WhyChooseUs />

      <CTASection />

    </MainLayout>
  );
};

export default Home;