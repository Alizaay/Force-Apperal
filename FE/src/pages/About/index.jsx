import MainLayout from "../../layouts/MainLayout";

import AboutHero from "../../components/about/AboutHero";
import AboutIntro from "../../components/about/AboutIntro";
import MissionVision from "../../components/about/MissionVision";
import Principles from "../../components/about/Principles";
import TeamSection from "../../components/about/TeamSection";
import TimelineSection from "../../components/about/TimelineSection";
import AboutCTA from "../../components/about/AboutCTA";

const About = () => {
  return (
    <MainLayout>
      <AboutHero />

      <AboutIntro />

      <MissionVision />

      <Principles />

      <TeamSection />

      <TimelineSection />

      <AboutCTA />
    </MainLayout>
  );
};

export default About;