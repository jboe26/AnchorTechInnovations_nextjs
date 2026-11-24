"use client";

import { useId, useState } from "react";

export default function TopicRequestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [center, setCenter] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const nameId = useId();
  const emailId = useId();
  const topicId = useId();
  const locationId = useId();
  const websiteId = useId();

  const inputClass =
    "w-full rounded-md border border-muted/30 bg-white px-3 py-2.5 text-base text-text placeholder:text-text/40 outline-none transition focus:border-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong";
  const labelClass = "mb-1 block font-mono text-xs tracking-wide text-text/60";

  if (status === "sent") {
    return (
      <p role="status" className="text-base font-semibold text-text">
        Got it. Your request is in, and when enough people in one place ask for
        the same topic, that becomes the next class scheduled there.
      </p>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/topic-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          topic,
          location: center === "other" ? location : center,
          website,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setErrorMessage(
          body?.error ??
            "Something went wrong. Try again, or email joshboepple@anchortech.org directly."
        );
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setErrorMessage(
        "Something went wrong. Try again, or email joshboepple@anchortech.org directly."
      );
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={nameId} className={labelClass}>
            Your name
          </label>
          <input
            id={nameId}
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor={emailId} className={labelClass}>
            Email
          </label>
          <input
            id={emailId}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            autoComplete="email"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor={topicId} className={labelClass}>
          What do you want to learn?
        </label>
        <textarea
          id={topicId}
          required
          rows={3}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={inputClass}
          placeholder="For example: video calls with my grandkids, staying safe shopping online, using AI to write letters..."
        />
      </div>
      <div className="mt-4">
        <label htmlFor={locationId} className={labelClass}>
          The center you attend
        </label>
        <select
          id={locationId}
          required
          value={center}
          onChange={(e) => setCenter(e.target.value)}
          className={inputClass}
        >
          <option value="" disabled>
            Choose your center
          </option>
          <option value="Berewick Recreation Center, Charlotte">
            Berewick Recreation Center, Charlotte
          </option>
          <option value="Belle Johnston Community Center, Pineville">
            Belle Johnston Community Center, Pineville
          </option>
          <option value="Bazemore Active Adult Center, Monroe">
            Bazemore Active Adult Center, Monroe
          </option>
          <option value="other">Somewhere else</option>
        </select>
        {center === "other" && (
          <input
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={`${inputClass} mt-3`}
            placeholder="Your town or the center you attend"
            aria-label="Your town or the center you attend"
          />
        )}
      </div>
      {/* Honeypot: hidden from people, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={websiteId}>Website</label>
        <input
          id={websiteId}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 rounded-md bg-primary px-6 py-3 font-[family-name:var(--font-montserrat)] text-base font-bold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Request this topic"}
      </button>
      <p className="mt-3 text-sm text-text/60">
        Requests come straight to me. When enough people in one place ask for
        the same topic, that becomes the next class scheduled there.
      </p>
      {status === "error" && (
        <p role="alert" className="mt-3 text-sm font-semibold text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
