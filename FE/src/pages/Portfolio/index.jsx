import { useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import PortfolioHeader from "../../components/portfolio/PortfolioHeader";
import PortfolioTabs from "../../components/portfolio/PortfolioTabs";
import PortfolioGrid from "../../components/portfolio/PortfolioGrid";
import TrustedBy from "../../components/portfolio/TrustedBy";

import {
  portfolioTabs,
  portfolioProjects,
} from "../../data/portfolioData";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? portfolioProjects
      : portfolioProjects.filter(
          (item) => item.category === activeTab
        );

  return (
    <MainLayout>
      <section className="bg-[#f7f7f5] w-full overflow-hidden">
       <div
  className="
    max-w-[1400px]
    mx-auto

    px-6
    lg:px-10

    py-[60px]
  "
>
          <PortfolioHeader />

          <PortfolioTabs
            tabs={portfolioTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <PortfolioGrid
            projects={filteredProjects}
          />

          <TrustedBy />
        </div>
      </section>
    </MainLayout>
  );
};

export default Portfolio;