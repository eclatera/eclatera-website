import { ArrowUpRight, Sparkles, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: <Sparkles size={26} />,
    number: "01",
    title: "Creativity",
    description:
      "We combine fresh ideas and thoughtful design to create digital experiences that stand out.",
  },
  {
    icon: <Target size={26} />,
    number: "02",
    title: "Innovation",
    description:
      "We use modern technology and smart solutions to help brands move forward.",
  },
  {
    icon: <Heart size={26} />,
    number: "03",
    title: "Quality",
    description:
      "Every detail matters. We focus on creating work that is clean, useful, and impactful.",
  },
];

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="section-label">ABOUT ECLATERA</div>

        <h1>
          We build digital
          <br />
          experiences with
          <span> purpose.</span>
        </h1>

        <p>
          ECLATERA is a creative digital studio focused on transforming ideas
          into meaningful websites, brands, and digital experiences.
        </p>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="story-tag">OUR STORY</div>

        <div className="story-content">
          <h2>
            More than just
            <span> design.</span>
          </h2>

          <div className="story-text">
            <p>
              We believe great digital experiences start with understanding.
              That means listening to ideas, identifying goals, and creating
              solutions that truly represent each brand.
            </p>

            <p>
              From modern websites to complete digital identities, we combine
              creativity, technology, and strategy to help ideas grow into
              something impactful.
            </p>

            <a href="#values" className="text-link">
              Discover our values <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values" id="values">
        <div className="values-heading">
          <div className="section-label">WHAT DRIVES US</div>

          <h2>
            Built on ideas.
            <br />
            Driven by <span>impact.</span>
          </h2>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <div className="value-card" key={value.number}>
              <div className="value-top">
                <div className="value-icon">{value.icon}</div>
                <span>{value.number}</span>
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div>
          <h2>
            Have an idea?
            <span> Let's make it real.</span>
          </h2>

          <p>
            Let's collaborate and create a digital experience that makes an
            impact.
          </p>
        </div>

        <Link to="/contact" className="cta-button">
          Let's Talk <ArrowUpRight size={19} />
        </Link>
      </section>
    </main>
  );
}