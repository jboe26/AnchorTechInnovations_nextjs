"use client";

import { useId, useState } from "react";

type Props = {
  classSlug: string;
  classTitle: string;
};

export default function RegisterForm({ classSlug, classTitle }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "free" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const nameId = useId();
  const emailId = useId();
  const websiteId = useId();

  const inputClass =
    "w-full rounded-md border border-muted/30 bg-white px-3 py-2.5 text-base text-text placeholder:text-text/40 outline-none transition focus:border-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong";
  const labelClass = "mb-1 block font-mono text-xs tracking-wide text-text/60";

  if (status === "free") {
    return (
      <div role="status" className="rounded-md bg-green-50 p-5 text-text">
        <p className="font-[family-name:var(--font-montserrat)] text-lg font-bold">
          You are in. See you there.
        </p>
        <p className="mt-2 leading-relaxed">
          Your seat for {classTitle} is saved, and this class is free for you. A
          confirmation email is on its way with the address, directions, and what
          to bring. No payment was needed.
        </p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/class-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, classSlug, website }),
      });
      const body = await res.json().catch(() => null);
      if (!res.ok) {
        setErrorMessage(
          body?.error ??
            "Something went wrong. Try again, or email joshboepple@anchortech.org directly."
        );
        setStatus("error");
        return;
      }
      if (body?.outcome === "payment" && body?.paymentUrl) {
        window.location.href = body.paymentUrl;
        return;
      }
      setStatus("free");
    } catch {
      setErrorMessage(
        "Something went wrong. Try again, or email joshboepple@anchortech.org directly."
      );
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
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
      <div className="mt-4">
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
        className="mt-6 w-full rounded-md bg-accent px-6 py-3 font-[family-name:var(--font-montserrat)] text-base font-bold text-white transition hover:bg-accent-strong disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Registering..." : "Register for this class"}
      </button>
      <p className="mt-3 text-sm text-text/60">
        Two fields. No account, no password, nothing else asked.
      </p>
      {status === "error" && (
        <p role="alert" className="mt-3 text-sm font-semibold text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
