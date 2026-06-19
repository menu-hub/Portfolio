import React, { useState } from 'react';
import './Contact.css';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Web3Forms Integration - Free static form service
    // You can get your own free Access Key at: https://web3forms.com/
    // Replacing this key will send messages directly to your email inbox!
    const accessKey = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      // Fallback behavior: if no key is set yet, open default mail client
      // but also simulate a successful form submission for demo purposes.
      setTimeout(() => {
        setStatus({ submitting: false, success: true, error: null });
        
        // Open mail client as a fallback so the message isn't lost
        const mailtoUri = `mailto:${personal.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Message')}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
        window.location.href = mailtoUri;

        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 800);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ submitting: false, success: false, error: result.message || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Network error. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <div className="contact-header reveal">
          <span className="terminal-text">// GET IN TOUCH</span>
          <h2 className="contact-title">Let's Connect</h2>
          <div className="accent-line"></div>
          <p className="contact-subtitle">
            Have a question, a project proposal, or just want to say hello? Drop me a line below or reach out via my social profiles.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information Column */}
          <div className="contact-info reveal">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-text">Feel free to contact me directly using any of the channels below.</p>

            <div className="info-cards">
              {/* Email Card */}
              <a href={`mailto:${personal.email}`} className="info-card glass">
                <div className="info-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Email Me</span>
                  <span className="info-value">{personal.email}</span>
                </div>
              </a>

              {/* Phone Card */}
              {personal.phone && (
                <a href={`tel:${personal.phone}`} className="info-card glass">
                  <div className="info-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="info-content">
                    <span className="info-label">Call Me</span>
                    <span className="info-value">{personal.phone}</span>
                  </div>
                </a>
              )}

              {/* LinkedIn Card */}
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="info-card glass">
                <div className="info-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">LinkedIn</span>
                  <span className="info-value">Connect on LinkedIn</span>
                </div>
              </a>

              {/* GitHub Card */}
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="info-card glass">
                <div className="info-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">GitHub</span>
                  <span className="info-value">View Repository & Projects</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-wrapper reveal">
            <form onSubmit={handleSubmit} className="contact-form glass">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  required
                  rows="5"
                  className="form-input form-textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="btn btn-primary form-submit-btn"
              >
                {status.submitting ? (
                  <span className="btn-loader">Sending...</span>
                ) : 'Send Message'}
              </button>

              {status.success && (
                <div className="form-alert success-alert">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="alert-icon">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>Your message has been sent successfully!</span>
                </div>
              )}

              {status.error && (
                <div className="form-alert error-alert">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="alert-icon">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" x2="12" y1="8" y2="12" />
                    <line x1="12" x2="12.01" y1="16" y2="16" />
                  </svg>
                  <span>{status.error}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
