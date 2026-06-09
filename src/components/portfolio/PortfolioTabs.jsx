const PortfolioTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="w-full flex justify-center mb-[32px]">
      <div className="flex flex-wrap justify-center gap-[10px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              h-[42px]

              min-w-[140px]

              px-[16px]

              rounded-[8px]

              text-[12px]
              uppercase
              font-semibold

              tracking-[1.2px]

              flex
              items-center
              justify-center

              whitespace-nowrap

              transition-all
              duration-200

              ${
                activeTab === tab
                  ? "bg-[#e1811f] text-white"
                  : "bg-white text-black"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTabs;