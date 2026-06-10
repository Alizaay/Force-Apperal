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
      : portfolioProjects.filter((item) => item.category === activeTab);

  return (
    <MainLayout>
      <section style={{ backgroundColor: "#f7f7f5", width: "100%", overflow: "hidden" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "60px 24px 80px",
          }}
          className="portfolio-container"
        >
          <div style={{ maxWidth: "1200px", width: "100%" }} className="portfolio-content">
            <PortfolioHeader />

            <PortfolioTabs
              tabs={portfolioTabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <PortfolioGrid projects={filteredProjects} />

            <TrustedBy />
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          .portfolio-container {
            padding-left: 40px !important;
            padding-right: 40px !important;
          }
        }
        @media (max-width: 640px) {
          .portfolio-container {
            padding: 40px 16px 60px !important;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default Portfolio;
