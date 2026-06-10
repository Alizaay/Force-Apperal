const PortfolioTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div style={{
      width: "100%",
      marginBottom: "32px",
    }}>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: "10px",
      }}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={isActive ? "portfolio-tab-active" : "portfolio-tab-inactive"}
              style={{
                height: "42px",
                minWidth: "140px",
                padding: "0 16px",
                borderRadius: "8px",
                fontSize: "12px",
                textTransform: "uppercase",
                fontWeight: 600,
                letterSpacing: "1.2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                border: isActive ? "none" : "1px solid #ebe6df",
                backgroundColor: isActive ? "#e1811f" : "#fff",
                color: isActive ? "#fff" : "#111",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <style>{`
        .portfolio-tab-inactive:hover {
          border-color: #e1811f !important;
          color: #e1811f !important;
        }
        .portfolio-tab-active:hover {
          background-color: #d07018 !important;
        }
        @media (max-width: 480px) {
          .portfolio-tab-inactive,
          .portfolio-tab-active {
            min-width: 0 !important;
            flex: 1 1 calc(50% - 10px) !important;
            font-size: 11px !important;
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioTabs;
