import { teamMembers } from "../../data/aboutData";

const TeamSection = () => {
  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="w-full flex justify-center px-6 py-[58px]">
        <div className="w-full max-w-[900px]">
          {/* HEADER */}
          <div className="text-center mb-[22px]">
            <p
              className="
                text-[#e1811f]
                text-[12px]
                uppercase
                tracking-[2.2px]
                mb-[8px]
              "
            >
              Meet The Team
            </p>

            <h2
              className="
                text-[30px]
                font-black
                uppercase
                leading-none
                tracking-[-0.4px]
                text-black
              "
            >
              The People Behind Every Stitch.
            </h2>
          </div>

          {/* TEAM CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-[10px]">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="
                  bg-[#f3f3f3]
                  rounded-[6px]
                  overflow-hidden
                "
              >
                <div className="h-[165px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />
                </div>

                <div className="px-[8px] py-[7px]">
                  <h3
                    className="
                      text-[12px]
                      font-black
                      uppercase
                      leading-none
                      text-black
                      mb-[4px]
                    "
                  >
                    {member.name}
                  </h3>

                  <p
                    className="
                      text-[12px]
                      leading-none
                      text-[#777]
                    "
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;