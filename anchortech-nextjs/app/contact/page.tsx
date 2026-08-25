"use client";
import { useState } from "react";
import Section from "@/components/home/Section";

export default function Contact() {
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
      await fetch("/", {
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
    "w-full rounded-md border border-anchor-slate/30 bg-white/[0.05] px-4 py-3 text-anchor-paper placeholder:text-anchor-slate outline-none transition focus:border-anchor-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-anchor-accent";

  const labelClass =
    "mb-1.5 block font-mono text-xs tracking-wider text-anchor-slate";

  return (
    <main>
      <section className="bg-anchor-paper text-anchor-ink">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 text-center md:px-10 md:pt-32 md:pb-24">
          <p className="font-mono text-sm tracking-wide text-anchor-ink/70">
            AnchorTech Innovations // contact
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Start the conversation.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-anchor-ink/70">
            Every project starts with a simple conversation. Share a bit
            about what you need, and I&apos;ll walk you through how
            AnchorTech can help without the overwhelm.
          </p>
        </div>
      </section>

      <Section id="get-in-touch" index={1} label="get in touch" bg="dark">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
          {/* Contact Info */}
          <div className="space-y-6 rounded-lg border border-anchor-slate/30 bg-white/[0.05] p-6 h-fit">
            <div>
              <p className="font-mono text-xs tracking-wider text-anchor-slate">
                email
              </p>
              <a
                href="mailto:joshboepple@anchortech.org"
                className="mt-1 inline-block font-semibold text-anchor-accent underline decoration-anchor-accent/40 underline-offset-4 transition hover:decoration-anchor-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-anchor-accent"
              >
                joshboepple@anchortech.org
              </a>
            </div>
            <div>
              <p className="font-mono text-xs tracking-wider text-anchor-slate">
                location
              </p>
              <p className="mt-1 text-anchor-paper/80">
                Pineville, NC, serving the greater Charlotte area
              </p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-wider text-anchor-slate">
                availability
              </p>
              <p className="mt-1 text-anchor-paper/80">
                Open to freelance projects, consulting, and ongoing
                partnerships.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-anchor-slate/30 bg-white/[0.05] p-6 sm:p-8">
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-paper">
              Send a message
            </h2>
            <form
              name="contact"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label className={labelClass}>your name</label>
                <input
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
                <label className={labelClass}>your email</label>
                <input
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
                <label className={labelClass}>message</label>
                <textarea
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
                className="w-full rounded-md bg-anchor-accent px-6 py-3 font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-anchor-accent"
              >
                Send message
              </button>
              {status && (
                <p className="mt-2 text-center text-sm text-anchor-paper/80">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </Section>
    </main>
  );
}
