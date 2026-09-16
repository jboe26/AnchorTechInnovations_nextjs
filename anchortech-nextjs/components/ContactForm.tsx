"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      });
      setStatus("Message sent! I'll be in touch soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "w-full rounded-md border border-muted/30 bg-white/[0.05] px-4 py-3 text-surface placeholder:text-muted outline-none transition focus:border-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong";

  const labelClass =
    "mb-1.5 block font-mono text-xs tracking-wider text-muted";

  return (
    <form
      name="contact"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="mt-6 space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          your name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="What should I call you?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          your email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="Where should I reply?"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell me about your project, your challenges, or what kind of support you're looking for."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-accent px-6 py-3 font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
      >
        Send message
      </button>
      {status && (
        <p role="status" className="mt-2 text-center text-sm text-surface/80">
          {status}
        </p>
      )}
    </form>
  );
}
