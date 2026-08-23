import {
  Code2,
  Palette,
  Smartphone,
  ShoppingBag,
  Search,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: <Code2 size={30} />,
      number: "01",
      title: "Web Development",
      description:
        "Fast, modern, and responsive websites built with the latest technologies.",
    },
    {
      icon: <Palette size={30} />,
      number: "02",
      title: "UI/UX Design",
      description:
        "Beautiful and user-focused interfaces that create memorable experiences.",
    },
    {
      icon: <Smartphone size={30} />,
      number: "03",
      title: "Responsive Design",
      description:
        "Websites that look and work perfectly on mobile, tablet, and desktop.",
    },
    {
      icon: <ShoppingBag size={30} />,
      number: "04",
      title: "E-Commerce",
      description:
        "Powerful online stores designed to help your business grow and sell more.",
    },
    {
      icon: <Search size={30} />,
      number: "05",
      title: "SEO Optimization",
      description:
        "Optimized websites designed for better visibility and search performance.",
    },
    {
      icon: <ArrowRight size={30} />,
      number: "06",
      title: "Custom Solutions",
      description:
        "Tailored digital solutions built specifically for your business needs.",
    },
  ];

  return (
    <main className="services-page min-h-screen bg-[#020b18] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#20d6cf]">
            What We Do
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Digital solutions built to{" "}
            <span className="text-[#20d6cf]">make an impact.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            From idea to launch, we create powerful digital experiences
            designed to help brands grow, connect, and stand out.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#20d6cf]/50 hover:bg-[#20d6cf]/5 hover:shadow-2xl hover:shadow-[#20d6cf]/5"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20d6cf]/10 text-[#20d6cf]">
                  {service.icon}
                </div>

                <span className="text-sm text-gray-500">
                  {service.number}
                </span>
              </div>

              <h2 className="mt-8 text-2xl font-bold transition duration-300 group-hover:text-[#20d6cf]">
                {service.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#20d6cf]"
              >
                Let's Talk
                <ArrowRight
                  size={17}
                  className="transition duration-300 group-hover:translate-x-2"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-[#20d6cf]/20 bg-[#20d6cf]/5 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Let's work together and turn your ideas into a powerful digital
            experience.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#20d6cf] px-7 py-3.5 font-semibold text-[#020b18] shadow-lg shadow-[#20d6cf]/10 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[#20d6cf]/20"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;