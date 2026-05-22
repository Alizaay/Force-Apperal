import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import {
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

const categories = [
  {
    title: "Formal Wear",
    description: "Blazer, Blouses, shirts....",
    path: "/category/formal-wear",
    featured: true,
  },
  {
    title: "Sports Wear",
    description: "Polo Boys & Girls, Shots...",
    path: "/category/sports-wear",
  },
  {
    title: "Work Wear",
    description: "HI VIS, HI VIS Pants...",
    path: "/category/work-wear",
  },
  {
    title: "Sports Uniform",
    description: "Sports Kits, Fleece, Gym....",
    path: "/category/sports-uniform",
  },
  {
    title: "Hospitality",
    description: "Aprons, Chef Uniform",
    path: "/category/hospitality",
  },
  {
    title: "Health Care",
    description: "Scrubs",
    path: "/category/health-care",
  },
  {
    title: "Accessories",
    description: "Ties, Bags, Duffle Bags",
    path: "/category/accessories",
  },
];

const navLinks = [
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header
        className="
          sticky
          top-0
          z-50
          bg-white
          border-b
          border-[#ece7df]
        "
      >

        {/* TOP BAR */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">

          <div
            className="
              h-[78px]
              flex
              items-center
              justify-between
            "
          >

            {/* LOGO */}
            <Link
              to="/"
              className="
                text-[34px]
                font-black
                uppercase
                tracking-[-2px]
                leading-none
              "
            >
              Forge Apparel
            </Link>

            {/* DESKTOP BUTTON */}
            <button
              className="
                hidden
                lg:flex
                items-center
                justify-center
                h-[48px]
                w-[200px]
                rounded-[6px]
                bg-[#e1811f]
                text-white
                text-[11px]
                uppercase
                tracking-[1.5px]
                font-semibold
                transition-all
                duration-300
                hover:bg-[#d07018]
                hover:-translate-y-[1px]
              "
            >
              Request Custom Order
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="
                lg:hidden
                text-[30px]
              "
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {
                mobileMenu
                  ? <FiX />
                  : <FiMenu />
              }
            </button>

          </div>

        </div>

        {/* NAVIGATION */}
        <div
          className="
            border-t
            border-[#f3eee7]
            bg-[#faf9f7]
            shadow-[0_4px_14px_rgba(0,0,0,0.03)]
          "
        >

          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">

            <nav
              className="
                hidden
                lg:flex
                items-center
                justify-center
                gap-14
                h-[74px]
                uppercase
                text-[13px]
                tracking-[3px]
                font-medium
              "
            >

              {/* CATEGORY */}
              <div
                className="
                  relative
                  h-full
                  flex
                  items-center
                "
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >

                <button
                  className="
                    relative
                    flex
                    items-center
                    gap-2
                    h-full
                    text-[#e1811f]
                  "
                >

                  <span>Category</span>

                  <FiChevronDown className="text-[14px]" />

                  {/* ACTIVE LINE */}
                  <span
                    className="
                      absolute
                      left-0
                      -bottom-[1px]
                      h-[2px]
                      w-full
                      bg-[#e1811f]
                    "
                  />

                </button>

                {/* DROPDOWN */}
                {
                  showDropdown && (

                    <div
                      className="
                        absolute
                        top-[108%]
                        left-0
                        pl-3
                        pt-3
                        z-50
                      "
                    >

                      <div
                        className="
                          w-[980px]
                          bg-white
                          rounded-[28px]
                          border
                          border-[#ece7df]
                          shadow-[0_25px_60px_rgba(0,0,0,0.06)]
                          px-14
                          py-14
                        "
                      >

                        <div
                          className="
                            grid
                            grid-cols-3
                            gap-x-12
                            gap-y-12
                          "
                        >

                          {
                            categories.map((item, index) => (

                              <Link
                                key={index}
                                to={item.path}
                                className={`
                                  transition-all
                                  duration-300
                                  ${
                                    item.featured
                                      ? `
                                        bg-[#e1811f]
                                        rounded-[8px]
                                        px-6
                                        py-6
                                        text-white
                                      `
                                      : `
                                        hover:text-[#e1811f]
                                      `
                                  }
                                `}
                              >

                                <h3
                                  className="
                                    text-[20px]
                                    font-bold
                                    mb-[10px]
                                  "
                                >
                                  {item.title}
                                </h3>

                                <p
                                  className={`
                                    text-[12px]
                                    leading-[1.9]
                                    tracking-[1px]
                                    ${
                                      item.featured
                                        ? "text-white/90"
                                        : "text-[#666]"
                                    }
                                  `}
                                >
                                  {item.description}
                                </p>

                              </Link>

                            ))
                          }

                        </div>

                      </div>

                    </div>

                  )
                }

              </div>

              {/* NAV LINKS */}
              {
                navLinks.map((item, index) => (

                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `
                        relative
                        transition-all
                        duration-300
                        hover:text-[#e1811f]
                        after:absolute
                        after:left-0
                        after:-bottom-[6px]
                        after:h-[2px]
                        after:bg-[#e1811f]
                        after:transition-all
                        after:duration-300
                        ${
                          isActive
                            ? `
                              text-[#e1811f]
                              after:w-full
                            `
                            : `
                              text-black
                              after:w-0
                              hover:after:w-full
                            `
                        }
                      `
                    }
                  >
                    {item.title}
                  </NavLink>

                ))
              }

            </nav>

          </div>

        </div>

      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed
          top-0
          right-0
          left-auto
          h-screen
          w-[85%]
          bg-white
          shadow-[0_0_40px_rgba(0,0,0,0.18)]
          z-[999]
          transition-all
          duration-500
          lg:hidden
          overflow-y-auto
          ${
            mobileMenu
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* MOBILE CONTENT */}
        <div className="min-h-screen flex flex-col">

          {/* MOBILE TOP */}
          <div
            className="
              h-[70px]
              px-4
              border-b
              border-[#ece7df]
              flex
              items-center
              justify-between
              shrink-0
            "
          >

            {/* MOBILE LOGO */}
            <Link
              to="/"
              className="
                text-[16px]
                font-black
                uppercase
                tracking-[-0.5px]
              "
            >
              Forge Apparel
            </Link>

            {/* CLOSE BUTTON */}
            <button
              className="text-[28px]"
              onClick={() => setMobileMenu(false)}
            >
              <FiX />
            </button>

          </div>

          {/* MOBILE BODY */}
          <div className="flex-1 overflow-y-auto px-5 py-6">

            {/* NAV LINKS */}
            <div
              className="
                flex
                flex-col
                gap-5
                uppercase
                text-[12px]
                tracking-[1px]
                font-semibold
              "
            >

              <NavLink
                to="/"
                onClick={() => setMobileMenu(false)}
              >
                Home
              </NavLink>

              {
                navLinks.map((item, index) => (

                  <NavLink
                    key={index}
                    to={item.path}
                    onClick={() => setMobileMenu(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#e1811f]"
                        : "text-black"
                    }
                  >
                    {item.title}
                  </NavLink>

                ))
              }

            </div>

            {/* CATEGORY TITLE */}
            <div className="mt-10 mb-5">

              <h3
                className="
                  text-[11px]
                  uppercase
                  tracking-[1.5px]
                  font-bold
                  text-[#999]
                "
              >
                Categories
              </h3>

            </div>

            {/* MOBILE CATEGORIES */}
            <div className="flex flex-col gap-5">

              {
                categories.map((item, index) => (

                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setMobileMenu(false)}
                    className="
                      group
                      border-b
                      border-[#f1ece5]
                      pb-4
                    "
                  >

                    <h4
                      className="
                        text-[14px]
                        font-bold
                        mb-1
                        transition-all
                        duration-300
                        group-hover:text-[#e1811f]
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        text-[10px]
                        text-[#777]
                        leading-[1.7]
                      "
                    >
                      {item.description}
                    </p>

                  </Link>

                ))
              }

            </div>

            {/* MOBILE CTA */}
            <button
              className="
                mt-10
                w-full
                h-[46px]
                rounded-[6px]
                bg-[#e1811f]
                text-white
                text-[11px]
                uppercase
                tracking-[1px]
                font-semibold
              "
            >
              Request Custom Order
            </button>

          </div>

        </div>

      </div>

      {/* OVERLAY */}
      {
        mobileMenu && (
          <div
            className="
              fixed
              inset-0
              bg-black/50
              z-[998]
              lg:hidden
            "
            onClick={() => setMobileMenu(false)}
          />
        )
      }

    </>
  );
};

export default Navbar;