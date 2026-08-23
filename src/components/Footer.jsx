import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#020b18] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="text-2xl font-bold tracking-[0.2em] text-white"
            >
              ECLA<span className="text-[#20d6cf]">TERA</span>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              We create modern digital experiences that help brands grow,
              connect, and stand out.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#20d6cf] transition hover:text-white"
            >
              Start a project
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#20d6cf]">
              Explore
            </h3>

            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="w-fit text-sm text-gray-400 transition hover:text-[#20d6cf]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#20d6cf]">
              Contact
            </h3>

            <a 
              href="mailto:eclateraa@gmail.com" 
              className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-[#20d6cf]" 
            >
              <Mail size={18} />
              eclateraa@gmail.com
            </a>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              Have an idea? Let's turn it into something exceptional.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ECLATERA. All rights reserved.
          </p>

          <p>
            Designed & Built by{" "}
            <span className="text-[#20d6cf]">ECLATERA</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;