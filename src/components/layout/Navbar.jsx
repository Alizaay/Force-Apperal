import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const categories = [
  { title: "Formal Wear",     description: "Blazer, Blouses, shirts....",       path: "/category/formal-wear",     featured: true },
  { title: "Sports Wear",     description: "Polo Boys & Girls, Shots...",        path: "/category/sports-wear" },
  { title: "Work Wear",       description: "HI VIS, HI VIS Pants...",            path: "/category/work-wear" },
  { title: "Sports Uniform",  description: "Sports Kits, Fleece, Gym....",       path: "/category/sports-uniform" },
  { title: "Hospitality",     description: "Aprons, Chef Uniform",               path: "/category/hospitality" },
  { title: "Health Care",     description: "Scrubs",                             path: "/category/health-care" },
  { title: "Accessories",     description: "Ties, Bags, Duffle Bags",            path: "/category/accessories" },
];

const navLinks = [
  { title: "About Us",   path: "/about" },
  { title: "Portfolio",  path: "/portfolio" },
  { title: "Blogs",      path: "/blogs" },
  { title: "FAQ",        path: "/faq" },
  { title: "Contact",    path: "/contact" },
];

/* ─── shared text styles ─── */
const NAV_TEXT = {
  fontSize: "12px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "2.5px",
  textDecoration: "none",
  transition: "color .2s",
};

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const location = useLocation();

  /* active helpers */
  const isCategoryActive = location.pathname.startsWith("/category");
  const activeCategoryPath = isCategoryActive ? location.pathname : null;

  return (
    <>
      {/* ═══════════════════════════════════
          TOP BAR  —  Logo + CTA Button
      ═══════════════════════════════════ */}
      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#f4f4f4",
        // borderBottom: "1px solid #e8e2db",
      }}>
        <div className="navbar-top-inner" style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link to="/" className="navbar-logo" style={{
            fontSize: "28px",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-1.5px",
            color: "#111",
            textDecoration: "none",
          }}>
            Forge Apparel
          </Link>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="desktop-cta"
            style={{
              backgroundColor: "#e1811f",
              color: "#fff",
              padding: "11px 24px",
              borderRadius: "6px",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Request Custom Order
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="mobile-hamburger"
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "26px", color: "#111", display: "none", padding: "4px",
            }}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════
          NAV BAR  —  Links row
      ═══════════════════════════════════ */}
      <div
        className="desktop-nav-bar"
        style={{
          position: "sticky",
          top: "72px",
          zIndex: 99,
          backgroundColor: "#ffffff",
          boxShadow: "0 -3px 10px rgba(0,0,0,0.06), 0 4px 14px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "48px",
        }}>

          {/* ── CATEGORY with mega-dropdown ── */}
          <div
            className="category-dropdown-wrap"
            style={{ position: "relative", height: "56px", display: "flex", alignItems: "center" }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button style={{
              ...NAV_TEXT,
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: isCategoryActive ? "#e1811f" : "#111",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0",
              position: "relative",
            }}>
              Category
              <FiChevronDown style={{ fontSize: "13px", transition: "transform .2s", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              {isCategoryActive && (
                <span style={{
                  position: "absolute", bottom: "-18px", left: 0,
                  width: "100%", height: "2px", backgroundColor: "#e1811f",
                }} />
              )}
            </button>

            {dropdownOpen && (
              <div
                className="category-dropdown-panel-wrap"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  paddingTop: "12px",
                  zIndex: 200,
                }}
              >
                <div style={{
                  width: "860px",
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  border: "1px solid #ece7df",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                  padding: "44px 52px",
                }}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "36px 40px",
                  }}>
                    {categories.map((item) => {
                      const isActiveCat = activeCategoryPath === item.path;
                      const isFeaturedDefault = item.featured && !activeCategoryPath;

                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setDropdownOpen(false)}
                          className={`category-dropdown-item${isActiveCat ? " is-active" : ""}${isFeaturedDefault ? " is-featured-default" : ""}`}
                          style={{
                            textDecoration: "none",
                            padding: "14px 18px",
                            borderRadius: "8px",
                            borderLeft: "3px solid #e7dfd6",
                            paddingLeft: "18px",
                            transition: "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                          }}
                        >
                          <div className="category-dropdown-title" style={{
                            fontSize: "15px",
                            fontWeight: 700,
                            marginBottom: "5px",
                          }}>
                            {item.title}
                          </div>
                          <div className="category-dropdown-desc" style={{
                            fontSize: "12px",
                            lineHeight: 1.6,
                          }}>
                            {item.description}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── Regular nav links ── */}
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                ...NAV_TEXT,
                color: isActive ? "#e1811f" : "#111",
                position: "relative",
                paddingBottom: "2px",
              })}
              className="nav-link"
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════
          MOBILE DRAWER
      ═══════════════════════════════════ */}
      {/* Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: "fixed", inset: 0,
          backgroundColor: "rgba(0,0,0,0.45)",
          zIndex: 998,
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity .3s",
        }}
      />

      {/* Panel */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: "82%", maxWidth: "340px",
        backgroundColor: "#fff",
        zIndex: 999,
        overflowY: "auto",
        transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform .35s ease",
        boxShadow: "-4px 0 40px rgba(0,0,0,0.15)",
      }}>
        {/* Panel header */}
        <div style={{
          height: "64px", borderBottom: "1px solid #ece7df",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 20px",
        }}>
          <Link to="/" onClick={() => setMobileOpen(false)} style={{
            fontSize: "18px", fontWeight: 900, textTransform: "uppercase",
            letterSpacing: "-0.5px", color: "#111", textDecoration: "none",
          }}>
            Forge Apparel
          </Link>
          <button onClick={() => setMobileOpen(false)} style={{
            background: "none", border: "none", cursor: "pointer",
            fontSize: "24px", color: "#111",
          }}>
            <FiX />
          </button>
        </div>

        {/* Panel body */}
        <div style={{ padding: "20px" }}>
          {/* Main pages */}
          <NavLink to="/" onClick={() => setMobileOpen(false)} style={({ isActive }) => ({
            display: "block", padding: "14px 0",
            borderBottom: "1px solid #f1ece5",
            fontSize: "13px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "1.5px",
            color: isActive ? "#e1811f" : "#111", textDecoration: "none",
          })}>Home</NavLink>

          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setMobileOpen(false)}
              style={({ isActive }) => ({
                display: "block", padding: "14px 0",
                borderBottom: "1px solid #f1ece5",
                fontSize: "13px", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "1.5px",
                color: isActive ? "#e1811f" : "#111", textDecoration: "none",
              })}
            >{item.title}</NavLink>
          ))}

          {/* Categories */}
          <p style={{
            marginTop: "28px", marginBottom: "14px",
            fontSize: "10px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "2px", color: "#aaa",
          }}>Categories</p>

          {categories.map((item) => {
            const isActiveCat = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", padding: "13px 0 13px 14px",
                  borderBottom: "1px solid #f1ece5",
                  borderLeft: `2px solid ${isActiveCat ? "#e1811f" : "#f1ece5"}`,
                  textDecoration: "none",
                  backgroundColor: isActiveCat ? "#fff8f3" : "transparent",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 700, color: isActiveCat ? "#e1811f" : "#111", marginBottom: "3px" }}>
                  {item.title}
                </div>
                <div style={{ fontSize: "11px", color: "#888" }}>{item.description}</div>
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <Link to="/contact" onClick={() => setMobileOpen(false)} style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            marginTop: "24px",
            backgroundColor: "#e1811f", color: "#fff",
            height: "48px", borderRadius: "6px",
            fontSize: "12px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "1px",
            textDecoration: "none",
          }}>
            Request Custom Order
          </Link>
        </div>
      </div>

      {/* ═══════════════════════════════════
          RESPONSIVE CSS
      ═══════════════════════════════════ */}
      <style>{`
        /* hover underline for nav links */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -18px;
          left: 0;
          width: 0;
          height: 2px;
          background: #e1811f;
          transition: width .2s;
        }
        .nav-link:hover { color: #e1811f !important; }
        .nav-link:hover::after { width: 100%; }

        /* category dropdown */
        .category-dropdown-item .category-dropdown-title {
          color: #111;
        }
        .category-dropdown-item .category-dropdown-desc {
          color: #666;
        }
        .category-dropdown-item.is-active,
        .category-dropdown-item.is-featured-default {
          background-color: #fff3e8;
          border-left-color: #e1811f !important;
          box-shadow: inset 0 0 0 1px rgba(225, 129, 31, 0.18);
        }
        .category-dropdown-item.is-active .category-dropdown-title,
        .category-dropdown-item.is-featured-default .category-dropdown-title {
          color: #111;
          font-weight: 800;
        }
        .category-dropdown-item.is-active .category-dropdown-desc,
        .category-dropdown-item.is-featured-default .category-dropdown-desc {
          color: #444;
        }
        .category-dropdown-item:hover {
          background-color: #e1811f !important;
          border-left-color: #c96a12 !important;
          box-shadow: none;
        }
        .category-dropdown-item:hover .category-dropdown-title {
          color: #fff !important;
          font-weight: 800;
        }
        .category-dropdown-item:hover .category-dropdown-desc {
          color: rgba(255, 255, 255, 0.92) !important;
        }

        /* desktop cta hover */
        .desktop-cta:hover { background-color: #d07018 !important; }

        /* ── mobile breakpoint ── */
        @media (max-width: 1024px) {
          .desktop-cta      { display: none !important; }
          .desktop-nav-bar  { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
        @media (max-width: 768px) {
          .navbar-top-inner {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .navbar-logo {
            font-size: 22px !important;
          }
        }
        @media (max-width: 480px) {
          .navbar-top-inner {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .navbar-logo {
            font-size: 18px !important;
            letter-spacing: -0.5px !important;
          }
        }
        @media (min-width: 1025px) {
          .mobile-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
