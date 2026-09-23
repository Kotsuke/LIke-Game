"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: integrate with your backend or email service
    alert("Message sent! (placeholder)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form className="p5-form" onSubmit={handleSubmit} id="contact-form">
      <div className="p5-form-row">
        <input
          type="text"
          name="name"
          className="p5-input"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          id="input-name"
        />
        <input
          type="email"
          name="email"
          className="p5-input"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          id="input-email"
        />
      </div>
      <input
        type="text"
        name="subject"
        className="p5-input"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        id="input-subject"
      />
      <textarea
        name="message"
        className="p5-input p5-textarea"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        id="input-message"
      />
      <button type="submit" className="p5-btn" id="btn-submit">
        <span>Send Message →</span>
      </button>
    </form>
  );
}
