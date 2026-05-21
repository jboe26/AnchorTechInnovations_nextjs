"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    if (data.success) {
      setStatus("Message sent! We'll be in touch soon.");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="bg-[#e8e8e8] min-h-screen px-6 py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Start the Conversation</h1>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Every project starts with a simple conversation. Share a bit about
            what you need, and we'll explore how AnchorTech can help — without
            the overwhelm.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8 space-y-4">
          <div>
            <p className="text-sm text-gray-400 mb-1">Email</p>
            <a
              href="mailto:joshboepple@anchortech.org"
              className="text-[#3b6a96] font-semibold"
            >
              joshboepple@anchortech.org
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Location</p>
            <p className="text-gray-600">
              Pineville, NC — serving the greater Charlotte area
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Availability</p>
            <p className="text-gray-600">
              Open to freelance projects, consulting, and ongoing partnerships.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-500 mb-1 block">
                Your Name
              </label>
              <input
                type="text"
                placeholder="How should we address you?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 placeholder:text-gray-300 outline-none focus:border-[#3b6a96] transition"
              />
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-1 block">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Where should we reply?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 placeholder:text-gray-300 outline-none focus:border-[#3b6a96] transition"
              />
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-1 block">
                Message
              </label>
              <textarea
                placeholder="Tell us about your project, your challenges, or what kind of support you're looking for."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 placeholder:text-gray-300 outline-none focus:border-[#3b6a96] transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3b6a96] text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
            {status && (
              <p className="text-center text-sm text-gray-500 mt-2">{status}</p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
