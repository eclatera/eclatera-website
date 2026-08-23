import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import logo from "../assets/logo.png";

function Home() {
  return (
    <main className="home-page">
      {/* ================= HERO SECTION ================= */}
      <section className="home-hero">
        <div className="hero-left">
          <div className="hero-badge">
            <span></span>
            Empowering Local Business Digitally
          </div>

          <h1>
            Your Business
            <br />
            Deserves to
            <br />
            Be <span>Online.</span>
          </h1>

          <p className="hero-description">
            ECLATERA builds affordable, professional websites for small
            businesses — fast, practical, and built to grow.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="primary-button">
  Get Your Website
  <ArrowRight size={19} />
</Link>

            <Link to="/portfolio" className="secondary-button">
  See Our Work
  <ArrowRight size={19} />
</Link>
          </div>

          <div className="hero-features">
            <div>
              <CheckCircle2 size={18} />
              <span>Affordable Pricing</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Fast Delivery</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Dedicated Support</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-glow"></div>

          <img
    src={logo}
    alt="ECLATERA"
    className="hero-image"
  />
        </div>
      </section>

      {/* ================= THE PROBLEM ================= */}
<section className="problem-section">
  <div className="problem-container">
    <p className="section-label">THE PROBLEM</p>

    <h2>
      Millions of small businesses
      <br />
      are invisible online.
    </h2>

    <div className="problem-grid">
      <div className="problem-card">
        <div className="problem-icon">₹</div>

        <h3>Too Expensive</h3>

        <p>
          Traditional web agencies charge ₹20,000–₹1,00,000+ for basic
          websites — completely out of reach for most small businesses.
        </p>
      </div>

      <div className="problem-card">
        <div className="problem-icon">✦</div>

        <h3>Too Complex</h3>

        <p>
          DIY website builders are confusing, time-consuming, and rarely
          produce professional results without technical expertise.
        </p>
      </div>

      <div className="problem-card">
        <div className="problem-icon">▦</div>

        <h3>Too Generic</h3>

        <p>
          Template-based solutions look identical to hundreds of other sites —
          failing to capture your brand's unique identity.
        </p>
      </div>
    </div>

    {/* Stats */}
    <div className="problem-stats">
      <div>
        <strong>70%</strong>
        <span>of Small Business have no website</span>
      </div>

      <div>
        <strong>3x</strong>
        <span>more customers trust businesses with a website</span>
      </div>

      <div>
        <strong>50K+</strong>
        <span>amazing sites we helped small businesses go live</span>
      </div>
    </div>
  </div>
</section>

{/* ================= BUSINESS TYPES ================= */}
<section className="business-types-section">
  <div className="business-types-container">
    <div className="business-types-heading">
      <p className="section-label">BUILT FOR EVERY BUSINESS</p>

      <h2>
        Every type of small business
        <span> deserves a great website.</span>
      </h2>

      <p>
        From local shops to growing startups, we create modern digital
        experiences designed around your business and your customers.
      </p>
    </div>

    <div className="business-types-grid">
      <div className="business-type-card">
        <span className="business-number">01</span>
        <h3>Local Businesses</h3>
        <p>Restaurants, salons, gyms, shops and local services.</p>
      </div>

      <div className="business-type-card">
        <span className="business-number">02</span>
        <h3>Startups</h3>
        <p>Modern websites that help new ideas stand out and grow.</p>
      </div>

      <div className="business-type-card">
        <span className="business-number">03</span>
        <h3>Professionals</h3>
        <p>Personal brands and professional services built for trust.</p>
      </div>

      <div className="business-type-card">
        <span className="business-number">04</span>
        <h3>Online Brands</h3>
        <p>Beautiful digital experiences for products and online businesses.</p>
      </div>
    </div>
  </div>
</section>

{/* ================= FINAL CTA ================= */}
<section className="home-final-cta">
  <div className="final-cta-content">
    <p className="section-label">READY TO GROW?</p>

    <h2>
      Let's build something
      <span> amazing together.</span>
    </h2>

    <p>
      Tell us about your business, and we'll help you create a modern
      digital presence that makes a lasting impression.
    </p>

    <Link to="/contact" className="primary-button">
  Start Your Project
  <ArrowRight size={19} />
</Link>
  </div>
</section>
    </main>
  );
}

export default Home;