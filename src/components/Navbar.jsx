import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020b18]/95 backdrop-blur-xl">
      <nav className="relative mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-[0.18em] text-white transition duration-300 hover:opacity-90 sm:text-2xl"
        >
          ECLA<span className="text-[#20d6cf]">TERA</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition duration-300 ${
                  isActive
                    ? "text-[#20d6cf]"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#20d6cf] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop Button */}
        <NavLink
          to="/contact"
          className="hidden rounded-full bg-[#20d6cf] px-6 py-3 text-sm font-semibold text-[#020b18] shadow-lg shadow-[#20d6cf]/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white lg:block"
        >
          Let's Talk
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition duration-300 hover:border-[#20d6cf] hover:text-[#20d6cf] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#020b18]/98 px-6 py-6 shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-xl border px-4 py-3.5 text-sm font-medium transition duration-300 ${
                      isActive
                        ? "border-[#20d6cf]/20 bg-[#20d6cf]/10 text-[#20d6cf]"
                        : "border-transparent text-gray-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="mt-3 rounded-xl bg-[#20d6cf] px-5 py-3.5 text-center text-sm font-semibold text-[#020b18] transition hover:bg-white"
              >
                Let's Talk
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;