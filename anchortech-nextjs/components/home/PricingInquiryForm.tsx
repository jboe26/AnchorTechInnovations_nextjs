"use client";

import { useId, useState } from "react";

type Props = {
  planName: string;
  priceLabel: string;
  isDark?: boolean;
  buttonClassName: string;
  buttonLabel?: string;
};

export default function PricingInquiryForm({
  planName,
  priceLabel,
  isDark = false,
  buttonClassName,
  buttonLabel,
}: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const nameId = useId();
  const emailId = useId();
  const websiteId = useId();

  const inputClass = isDark
    ? "w-full rounded-md border border-white/20 bg-white/[0.05] px-3 py-2 text-sm text-surface placeholder:text-surface/50 outline-none transition focus:border-accent-on-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-on-dark"
    : "w-full rounded-md border border-muted/30 bg-white px-3 py-2 text-sm text-text placeholder:text-text/40 outline-none transition focus:border-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong";

  const labelClass = `mb-1 block font-mono text-xs tracking-wide ${
    isDark ? "text-surface/60" : "text-text/60"
  }`;

  if (status === "sent") {
    return (
      <p
        role="status"
        className={`mt-6 text-sm font-semibold ${isDark ? "text-surface" : "text-text"}`}
      >
        Thanks! I&apos;ll be in touch soon.
      </p>
    );
  }

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className={buttonClassName}>
        {buttonLabel ?? `Start with ${planName}`}
      </button>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/pricing-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, planName, priceLabel, website }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setErrorMessage(
          body?.error ?? "Something went wrong. Try again, or email joshboepple@anchortech.org directly."
        );
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setErrorMessage("Something went wrong. Try again, or email joshboepple@anchortech.org directly.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-3">
      {/* Honeypot: hidden from real visitors, only a bot fills this in. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor={websiteId}>Leave this field blank</label>
        <input
          id={websiteId}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor={nameId} className={labelClass}>
          your name
        </label>
        <input
          id={nameId}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor={emailId} className={labelClass}>
          your email
        </label>
        <input
          id={emailId}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputClass}
        />
      </div>
      <button type="submit" disabled={status === "sending"} className={buttonClassName}>
        {status === "sending" ? "Sending..." : `Send`}
      </button>
      {status === "error" && (
        <p role="status" className={`text-xs ${isDark ? "text-surface/70" : "text-text/70"}`}>
          {errorMessage}
        </p>
      )}
    </form>
  );
}
