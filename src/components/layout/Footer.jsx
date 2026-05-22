const Footer = () => {
  return (
    <footer
      className="
        bg-[#f3efea]
        border-t
        border-[#dfd9d2]
      "
    >

      {/* MAIN CONTAINER */}
      <div
        className="
          max-w-[1700px]
          mx-auto

          px-[40px]
          sm:px-[70px]
          lg:px-[150px]

          pt-[120px]
          pb-[70px]
        "
      >

        {/* TOP CONTENT */}
        <div
          className="
            grid
            grid-cols-1

            md:grid-cols-3

            gap-y-[70px]
            md:gap-x-[140px]

            items-center
            text-center
          "
        >

          {/* LEFT SIDE */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
            "
          >

            <h2
              className="
                text-[34px]
                lg:text-[44px]

                font-black

                uppercase

                tracking-[-2px]

                leading-none

                mb-[30px]

                text-black
              "
            >
              Forge Apparel
            </h2>

            <p
              className="
                text-[#9b9b9b]

                text-[17px]

                leading-[2]

                max-w-[360px]
              "
            >
              Engineered for precision.
              Built for the elite.
              The global standard in
              high-performance
              textile solutions.
            </p>

          </div>

          {/* CONTACT */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
            "
          >

            <h3
              className="
                text-[#e1811f]

                uppercase

                text-[14px]

                tracking-[4px]

                font-medium

                mb-[30px]
              "
            >
              Contact
            </h3>

            <div
              className="
                flex
                flex-col

                gap-[14px]

                text-[#9b9b9b]

                text-[17px]

                leading-[1.9]
              "
            >

              <p>
                Industrial Hub 04, Sector 12
              </p>

              <p>
                Forge Precision Plaza
              </p>

              <p>
                info@forgeapparel.com
              </p>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
            "
          >

            <h3
              className="
                text-[#e1811f]

                uppercase

                text-[14px]

                tracking-[4px]

                font-medium

                mb-[30px]
              "
            >
              Quick Links
            </h3>

            <ul
              className="
                flex
                flex-col

                gap-[18px]

                text-[#9b9b9b]

                text-[17px]
              "
            >

              <li className="hover:text-[#e1811f] transition-all duration-300 cursor-pointer">
                Sustainability
              </li>

              <li className="hover:text-[#e1811f] transition-all duration-300 cursor-pointer">
                Bulk Orders
              </li>

              <li className="hover:text-[#e1811f] transition-all duration-300 cursor-pointer">
                Custom Branding
              </li>

              <li className="hover:text-[#e1811f] transition-all duration-300 cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-[#e1811f] transition-all duration-300 cursor-pointer">
                Terms of Service
              </li>

            </ul>

          </div>

        </div>

        {/* BOTTOM LINE */}
        <div
          className="
            border-t
            border-[#9f9993]

            mt-[80px]

            pt-[28px]
          "
        >

          <p
            className="
              text-[12px]

              uppercase

              tracking-[1.5px]

              text-[#222]

              text-center
            "
          >
            © 2024 Alliance Software
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;