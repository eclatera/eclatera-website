import { ArrowUpRight } from "lucide-react";

import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

const projects = [
  {
    id: "01",
    category: "Full Stack Development",
    title: "Task Manager",
    description:
      "A modern task management application for organizing and tracking daily work.",
    image: project1,
    link: "#",
  },
  {
    id: "02",
    category: "MERN Stack",
    title: "Wanderlust",
    description:
      "A travel and accommodation platform with a modern and user-friendly experience.",
    image: project2,
    link: "#",
  },
  {
    id: "03",
    category: "AI Web Application",
    title: "Earnings Insight AI",
    description:
      "An intelligent platform designed to provide useful business and earnings insights.",
    image: project3,
    link: "#",
  },
  {
    id: "04",
    category: "Web Development",
    title: "Stitch Style",
    description:
      "A modern fashion-focused web application with a clean and engaging interface.",
    image: project4,
    link: "#",
  },
];

function Portfolio() {
  return (
    <main className="portfolio-page">
      {/* Hero */}
      <section className="portfolio-hero">
        <p className="section-label">OUR WORK</p>

        <h1>
          Ideas we've turned
          <span> into impact.</span>
        </h1>

        <p className="portfolio-description">
          Explore a selection of digital experiences and modern web
          applications built with creativity, technology, and purpose.
        </p>
      </section>

      {/* Projects */}
      <section className="portfolio-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-top">
              <span>{project.category}</span>
              <span>{project.id}</span>
            </div>

            <div className="project-visual">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project
                <ArrowUpRight size={20} />
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="portfolio-cta">
        <p>YOUR PROJECT COULD BE NEXT</p>

        <h2>Let's create something exceptional.</h2>

        <a href="/contact" className="portfolio-cta-button">
          Start Your Project
          <ArrowUpRight size={20} />
        </a>
      </section>
    </main>
  );
}

export default Portfolio;