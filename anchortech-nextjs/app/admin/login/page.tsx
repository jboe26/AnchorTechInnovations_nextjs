"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin/products");
      router.refresh();
    } else {
      setError("Incorrect password.");
      setSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-anchor-paper px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg border border-anchor-slate/30 bg-white p-8 shadow-sm"
      >
        <h1 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-ink">
          Admin
        </h1>
        <div className="mt-6">
          <label className="mb-1.5 block font-mono text-xs tracking-wider text-anchor-slate">
            password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoFocus
            className="w-full rounded-md border border-anchor-slate/30 px-4 py-3 text-anchor-ink outline-none transition focus:border-anchor-deep"
          />
        </div>
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="mt-6 w-full rounded-md bg-anchor-deep px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
        >
          {submitting ? "Checking..." : "Log in"}
        </button>
      </form>
    </main>
  );
}
