import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, ArrowUpRight } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("sending");

    emailjs
      .send(
        "service_4pfwxop",
        "template_aopvo0a",
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        "nXxKIF4S7SSvOk-TC"
      )
      .then(() => {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setStatus("error");
      });
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <p className="section-label">GET IN TOUCH</p>

        <h1>
          Let's build something
          <span> great together.</span>
        </h1>

        <p>
          Have a project in mind? Tell us about your idea and let's create a
          digital experience that makes an impact.
        </p>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        {/* Left Side */}
        <div className="contact-info">
          <p className="section-label">CONTACT US</p>

          <h2>
            Start the conversation.
            <span> We're ready.</span>
          </h2>

          <p className="contact-info-text">
            Whether you have a new project, a business idea, or simply want to
            know more about ECLATERA, we'd love to hear from you.
          </p>

          <a
            href="mailto:eclateraa@gmail.com"
            className="email-box"
          >
            <div className="email-icon">
              <Mail size={22} />
            </div>

            <div>
              <span>EMAIL US</span>
              <strong>eclateraa@gmail.com</strong>
            </div>

            <ArrowUpRight size={20} className="email-arrow" />
          </a>
        </div>

        {/* Right Side Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Company / Brand</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter company name"
            />
          </div>

          <div className="form-group">
            <label>Tell us about your project</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Tell us about your idea, goals, and requirements..."
              required
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Your Message"}
            <ArrowUpRight size={19} />
          </button>

          {status === "success" && (
            <p className="form-success">
              Message sent successfully! We'll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="form-error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

export default Contact;