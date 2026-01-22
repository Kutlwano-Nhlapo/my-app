import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './ContactStyle.css';

export default function ContactPage() {
  // 1. Setup Formspree Hook
  // REPLACE "YOUR_FORMSPREE_ID" with your actual form ID (e.g., "xjqzpwer")
  const [state, handleSubmit] = useForm("mzddnynd");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Manage logic to clear form upon success
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page-container">
      {/* Animated background elements */}
      <div className="background-effects">
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
      </div>

      <div className="content-wrapper">
        {/* Header with animation */}
        <div className="header-section">
          <div className="header-title-wrapper">
            <h1 className="main-title">Get In Touch</h1>
          </div>
          <p className="subtitle">I would love to hear from you. Send me a message!</p>
          <div className="title-divider"></div>
        </div>

        <div className="grid-container">
          {/* Contact Information */}
          <div className="info-column">
            <div className="contact-info-card">
              <h2 className="card-title">
                Contact Information
                <span className="online-indicator"></span>
              </h2>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="icon-wrapper icon-purple">
                    <Mail className="contact-icon" />
                  </div>
                  <div>
                    <h3 className="item-title">Email</h3>
                    <p className="item-text">kutlwanonhlapo@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-wrapper icon-pink">
                    <Phone className="contact-icon" />
                  </div>
                  <div>
                    <h3 className="item-title">Phone</h3>
                    <p className="item-text">+27 833 85 0849</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-wrapper icon-indigo">
                    <MapPin className="contact-icon" />
                  </div>
                  <div>
                    <h3 className="item-title">Location</h3>
                    <p className="item-text">Pretora, 0122<br />Gauteng</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="business-hours-card">
              <div className="hours-overlay"></div>
              <div className="hours-glow"></div>
              <div className="hours-content">
                <h3 className="hours-title">Business Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Monday - Friday:</span>
                    <span className="time">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday:</span>
                    <span className="time">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday:</span>
                    <span className="time">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-card">
            <h2 className="card-title">
              Send us a Message
              <span className="title-emoji">✨</span>
            </h2>

            {/* Success/Error Message Display Logic */}
            {(state.succeeded || (state.errors && state.errors.length > 0)) && (
              <div className={`status-message ${state.succeeded ? 'status-success' : 'status-error'}`}>
                {state.succeeded ? (
                  <CheckCircle className="status-icon status-icon-success" />
                ) : (
                  <AlertCircle className="status-icon status-icon-error" />
                )}
                <p className={`status-text ${state.succeeded ? 'text-success' : 'text-error'}`}>
                  {state.succeeded 
                    ? "Message sent successfully! We'll get back to you soon." 
                    : "Failed to send message. Please try again."}
                </p>
              </div>
            )}

            {/* CHANGED: Swapped <div className="form-fields"> for <form> 
               to handle the onSubmit event natively.
            */}
            <form onSubmit={handleSubmit} className="form-fields">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="John Sbiya"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="john@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="How can we help?"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-textarea"
                  placeholder="Tell us more about your inquiry..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="submit-button"
              >
                <div className="button-overlay"></div>
                {state.submitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span className="button-text">Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="button-text">Send Message</span>
                    <Send className="send-icon" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}