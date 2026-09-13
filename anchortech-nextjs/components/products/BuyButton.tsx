"use client";

import { useState } from "react";

export default function BuyButton({ slug }: { slug: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async () => {
    setLoading(true);
    setError("");

    // Open the tab synchronously, in the same event handler as the click,
    // so browsers don't treat it as a blocked popup -- we fill in the URL
    // once the checkout session comes back.
    const newTab = window.open("", "_blank");

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    const json = await res.json();

    if (!res.ok || !json.url) {
      setError(json.error ?? "Something went wrong. Please try again.");
      setLoading(false);
      newTab?.close();
      return;
    }

    if (newTab) {
      newTab.location.href = json.url;
    } else {
      // Popup was blocked -- fall back to the current tab.
      window.location.href = json.url;
    }
    setLoading(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="mt-6 w-full rounded-md bg-accent px-6 py-3.5 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Redirecting..." : "Buy now"}
      </button>
      {error && <p className="mt-3 text-sm text-red-200">{error}</p>}
    </div>
  );
}
